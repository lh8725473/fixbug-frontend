/**
 * http-service
 * @author guobin201314@gmail.com on 2019-04-20
 */
import { CONFIG } from '@/service/config';
import axios, { AxiosInstance } from 'axios';
import { Message } from 'element-ui';
import store from '../store/index';

export const httpService: AxiosInstance = axios.create({
  baseURL: CONFIG.host,
  timeout: 15000,
});

httpService.interceptors.request.use(
  (config: any) => {
    if (store.getters.token) {
      config.headers['X-Token'] = store.getters.token;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

httpService.interceptors.response.use(
  (response: any) => {
    const res = response.data;
    if (res.code === 1) {
      return res;
    } else {
      Message({
        message: res.errorMsg || 'error',
        type: 'error',
        duration: 5 * 1000,
      });
      return Promise.reject(res.errorMsg || 'error');
    }
  },
  (error: any) => {
    Message({
      message: error,
      type: 'error',
      duration: 3 * 1000,
    });
    return Promise.reject(error);
  },
);
