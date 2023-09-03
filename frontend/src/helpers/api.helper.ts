import axios, { AxiosRequestConfig } from "axios";

const baseUrl = "http://localhost:3000/";

const populateConfig = (config: any): AxiosRequestConfig => {
  const additionalConfig: AxiosRequestConfig = {
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*", // Replace '*' with your allowed origin(s) if necessary
      "Access-Control-Allow-Methods":
        "GET, HEAD, PUT, PATCH, POST, DELETE, OPTION", // Specify allowed HTTP methods
      "Access-Control-Allow-Headers":
        "Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With", // Specify allowed request headers
    },
  };

  return {
    ...additionalConfig,
    ...config,
  };
};

export const ApiHelper = {
  get: (url: string, config?: AxiosRequestConfig) =>
    axios.get(url, populateConfig(config)),
  post: (url: string, config?: AxiosRequestConfig) =>
    axios.post(url, populateConfig(config)),
  put: (url: string, config?: AxiosRequestConfig) =>
    axios.put(url, populateConfig(config)),
  delete: (url: string, config?: AxiosRequestConfig) =>
    axios.delete(url, populateConfig(config)),
};
