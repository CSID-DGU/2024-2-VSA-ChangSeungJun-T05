import { useQuery } from '@tanstack/react-query';
import { getUrlQueryKey } from '@apis/getUrl/getUrlQueryKey';

export const useGetUrl = (url: string) => {
  return useQuery({
    queryKey: getUrlQueryKey(url).queryKey,
    queryFn: getUrlQueryKey(url).queryFn,
    enabled: !!url,
    staleTime: 10000,
    gcTime: 10000,
  });
};
