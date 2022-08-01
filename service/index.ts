import axios, { AxiosRequestConfig } from "axios";

interface AxiosArgs extends AxiosRequestConfig {
  withToken?: boolean;
  token?: string | null;
}

const getAxiosConfig = (args?: AxiosArgs) => {
  let { withToken = true, headers: _headers, token, ...rest } = args || {};

  let headers: any = {
    ..._headers,
  };

  if (withToken) {
    if (!token) {
      token = localStorage.getItem("token");
    }

    headers.Authorization = `Bearer ${token}`;
  }

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    ...rest,
    headers,
  });
};

export default getAxiosConfig;
