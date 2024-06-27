import { useMutation } from '@tanstack/react-query';
import { postReportUrl } from '@apis/postReportUrl/postReportUrl';
import { TpostReportUrlRequest } from '@root/src/apis/postReportUrl/_type';

export const usePostReportUrl = () => {
  return useMutation({
    mutationFn: (urlData: TpostReportUrlRequest) => postReportUrl(urlData),
  });
};
