import axios from "axios";

const getAxiosConfig = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  });
};

export default getAxiosConfig;
