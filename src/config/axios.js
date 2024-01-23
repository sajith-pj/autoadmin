import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
  config.baseURL = `http://localhost:3000`;
  config.headers = Object.assign(
    {
      Authorization: `${localStorage.getItem("accessToken")}`,
    },
    config.headers
  );
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const config = { axios: axiosInstance };
export default config;
