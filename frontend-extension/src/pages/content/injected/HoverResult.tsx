import { DangerousHoverModal, LaodingHoverModal, SafeHoverModal } from '@src/components/hover/modal/HoverModal.stories';
import { HoverModal } from '@src/components/hover/modal/HoverModal';
import { useGetUrl } from '@src/apis/getUrl/useGetURL';
import { TgetUrlResponse } from '@src/apis/getUrl/_type';

interface HoverResultProps {
  url: string;
}

const HoverResult: React.FC<HoverResultProps> = ({ url }) => {
  const { data, isLoading, error } = useGetUrl(url);

  return getHoverResult(isLoading, data, error);
};

export default HoverResult;

const getHoverResult = (isLoading: boolean, data: TgetUrlResponse, error: Error) => {
  if (isLoading) {
    return <HoverModal {...LaodingHoverModal.args} />;
  }
  if (error) {
    return (
      <HoverModal {...DangerousHoverModal.args} label="에러 입니다." caption={'예기치 못한 에러가 발생했습니다.'} />
    );
  }
  if (data && data.is_malicious) {
    return <HoverModal {...DangerousHoverModal.args} caption={data.description} />;
  } else {
    return <HoverModal {...SafeHoverModal.args} />;
  }
};
