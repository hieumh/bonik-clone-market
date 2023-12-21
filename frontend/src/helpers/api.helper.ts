import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

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

export const refreshToken = async () => {
  try {
    await ApiHelper.post("/api/v1/auth/refresh-token", {
      withCredentials: true,
    });

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

// There some issue in the house
let hasError = false;
axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (hasError) {
      return;
    }

    hasError = true;
    const originalRequest = error?.config;

    if (error.response && error.response.status === 401) {
      try {
        const status = await refreshToken();
        if (status === true && originalRequest) {
          return axios(originalRequest);
        }
      } catch (e) {
        return Promise.reject(error);
      }
    }
  }
);

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
