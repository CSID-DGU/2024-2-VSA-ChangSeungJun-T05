import { isAxiosError } from 'axios';
import { instance } from '@apis/axios';
import { TpostReportUrlRequest } from '@root/src/apis/postReportUrl/_type';

export const postReportUrl = async (urlData: TpostReportUrlRequest) => {
  try {
    const response = await instance.post(`api/report`, {
      url: urlData.url,
      type: urlData.reportOption,
    });
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
