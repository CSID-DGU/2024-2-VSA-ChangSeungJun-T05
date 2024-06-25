import { useQuery } from '@tanstack/react-query';
import { getUrlQueryKey } from '@apis/getUrl/getUrlQueryKey';

export const useGetUrl = (url: string) => {
  // URL이 유효한 경우에만 useQuery 훅 호출
  return useQuery({
    queryKey: getUrlQueryKey(url).queryKey,
    queryFn: getUrlQueryKey(url).queryFn,
    staleTime: 10000,
    gcTime: 10000,
  });
};
