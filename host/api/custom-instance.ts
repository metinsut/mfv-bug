import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";

export const axiosInstance = axios.create();

export default function customInstance<T>(config: AxiosRequestConfig): Promise<T> {
  return axiosInstance(config).then(({ data }) => data);
}

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
