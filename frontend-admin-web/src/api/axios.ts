import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.defend-url-admin.site',
  headers: {
    Authorization: `Bearer `, // TODO: 수정 필요
  },
});
