import { AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestConfig = AxiosRequestConfig;
export type Response<T> = AxiosResponse<T>;
export type RequestParams = Record<string, any>;

export interface HttpServiceInterface {
  get<T>(
    path: string,
    params?: RequestParams,
    config?: RequestConfig
  ): Promise<Response<T>>;
  post<T>(
    path: string,
    data?: any,
    config?: RequestConfig
  ): Promise<Response<T>>;
  put<T>(
    path: string,
    data?: any,
    config?: RequestConfig
  ): Promise<Response<T>>;
  delete<T>(path: string, config?: RequestConfig): Promise<Response<T>>;
}
