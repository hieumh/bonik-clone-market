import axios, { AxiosRequestConfig } from 'axios';

const populateConfig = (config: any): AxiosRequestConfig => {
  const additionalConfig = {};

  return {
    ...config,
    additionalConfig,
  };
};

export const ApiHelper = {
  get: (url: string, config: AxiosRequestConfig) =>
    axios.get(url, populateConfig(config)),
  post: (url: string, config: AxiosRequestConfig) =>
    axios.post(url, populateConfig(config)),
  put: (url: string, config: AxiosRequestConfig) =>
    axios.put(url, populateConfig(config)),
  delete: (url: string, config: AxiosRequestConfig) =>
    axios.delete(url, populateConfig(config)),
};
