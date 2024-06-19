import { useMutation } from '@tanstack/react-query';
import { postUrl } from '@/api/postUrl';
import { TURLIds } from '@/types/urlList';

export const usePostUrl = () => {
  return useMutation({
    mutationFn: (body: TURLIds) => postUrl(body),
    onSuccess: async () => {
        alert("삭제되었습니다.")
    },
    onError: async () =>{
        alert("오류가 발생하였습니다.")
    },
  });
};
