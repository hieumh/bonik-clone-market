import { TOKEN_STORE_KEY } from "@/constants/common.constant";
import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";

const baseUrl = "http://localhost:3000/";

enum EHttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

const populateConfig = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const additionalConfig: AxiosRequestConfig = {
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods":
        "GET, HEAD, PUT, PATCH, POST, DELETE, OPTION",
      "Access-Control-Allow-Headers":
        "Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With",
    },
  };

  return {
    ...additionalConfig,
    ...config,
  };
};

export const ApiHelper = {
  get: (url: string, config: AxiosRequestConfig = {}) =>
    axios(
      url,
      populateConfig({
        ...config,
        method: EHttpMethod.GET,
      })
    ),
  post: (url: string, config: AxiosRequestConfig = {}) =>
    axios(
      url,
      populateConfig({
        ...config,
        method: EHttpMethod.POST,
      })
    ),
  put: (url: string, config: AxiosRequestConfig = {}) =>
    axios(
      url,
      populateConfig({
        ...config,
        method: EHttpMethod.PUT,
      })
    ),
  delete: (url: string, config: AxiosRequestConfig = {}) =>
    axios(url, populateConfig({ ...config, method: EHttpMethod.DELETE })),
};
