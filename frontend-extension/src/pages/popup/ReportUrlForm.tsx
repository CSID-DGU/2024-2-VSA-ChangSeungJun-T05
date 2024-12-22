import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { Label } from '@src/components/common/atoms/label/Label';
import { SafeLabel } from '@src/components/common/atoms/label/Label.stories';
import { SearchBar } from '@src/components/common/molecules/searchBar/SearchBar';
import { Select } from '@src/components/common/atoms/select/Select';
import { usePostReportUrl } from '@hooks/apis/usePostReportURL';

/**
 * @returns 신고 URL과 사유를 입력하는 폼입니다.
 */
const declarationOptionConfig = [
  { value: 'Phishing', description: '이 사이트는 피싱 사이트입니다.' },
  { value: 'Defacement', description: '이 사이트는 해킹되어 원래 내용이 변조되었습니다.' },
  { value: 'Malware', description: '이 사이트는 악성코드를 포함하고 있습니다.' },
];

const ReportUrlForm = () => {
  const { mutate } = usePostReportUrl();

  const [isSearched, setIsSearched] = useState(false);
  const [submittedReason, setSubmittedReason] = useState('');
  const handlesubmittedReasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSubmittedReason(event.target.value);
  };

  const [submittedURL, setSubmittedURL] = useState('');
  const handleSubmittedURLChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubmittedURL(event.target.value);
  };

  const [isAble, setIsAble] = useState(false);
  useEffect(() => {
    if (submittedReason == '' || submittedURL == '') {
      setIsAble(false);
    } else {
      setIsAble(true);
    }
  }, [submittedReason, submittedURL]);

  const handleSubmit = () => {
    mutate(
      { url: submittedURL, reportOption: submittedReason },
      {
        onSuccess: () => {
          setIsSearched(true);
          alert('신고가 완료되었습니다. 감사합니다!');
        },
        onError: () => {
          alert('신고에 실패했습니다. 다시 시도해주세요.');
        },
      },
    );
  };

  return isSearched ? (
    <Label {...SafeLabel.args} label="신고가 완료되었습니다." />
  ) : (
    <InputFromWrapper>
      <Select value={submittedReason} onChange={handlesubmittedReasonChange} options={declarationOptionConfig} />

      <SearchBar
        placeholder="악성 URL을 입력해주세요."
        inputHandeler={handleSubmittedURLChange}
        value={submittedURL}
        isValid={isAble}
        buttonHandeler={handleSubmit}
      />
    </InputFromWrapper>
  );
};

export default ReportUrlForm;

const InputFromWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
