import axios from "axios";
import type { AxiosInstance } from "axios";
import type {
  HttpServiceInterface,
  RequestConfig,
  RequestParams,
  Response,
} from "@/types";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  config.params = {
    ...config.params,
    api_key: apiKey,
  };

  return config;
});

export class HttpService implements HttpServiceInterface {
  public get<T>(
    path: string,
    params: RequestParams = {},
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.get<T>(path, { ...config, params });
  }

  public post<T>(
    path: string,
    data: any = {},
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.post<T>(path, data, config);
  }

  public put<T>(
    path: string,
    data: any = {},
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.put<T>(path, data, config);
  }

  public patch<T>(
    path: string,
    data: any = {},
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.patch<T>(path, data, {
      ...config,
      headers: {
        ...config.headers,
        accept: "*/*",
      },
    });
  }

  public delete<T>(
    path: string,
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.delete<T>(path, config);
  }
}

export default new HttpService();
