import React from 'react';
import { getUrl } from '@root/src/apis/getUrl/getUrl';

export const getUrlQueryKey = (url: string) => {
  return {
    queryKey: ['urlInfo', url],
    queryFn: async () => await getUrl(url),
  };
};
