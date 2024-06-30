import { styled } from 'styled-components';

import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

import { Label } from '@root/src/components/common/atoms/label/Label';
import { DefaultLabel } from '@root/src/components/common/atoms/label/Label.stories';
import ReportUrlForm from './ReportUrlForm';

const Popup = () => {
  return (
    <PopupWrapper>
      <Label {...DefaultLabel.args} label="악성 URL 신고하기" />
      <ReportUrlForm />
    </PopupWrapper>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);

const PopupWrapper = styled.div`
  width: 480px;
  padding: 2rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* border: 1px solid #3c96e9; */
`;
