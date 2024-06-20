import { getUrlList } from "@/api/getUrlList";

export const getUrlListQueryKey = () => {
  return {
    queryKey: ['urlList'],
    queryFn: () => getUrlList(),
  };
};
