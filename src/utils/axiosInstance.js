import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  // timeout: 10000,
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  // },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // handle common errors globally
    if (error.response) {
      if (error.response.status === 401) {
        // redirect to login user
        // window.location.href = "/login";
        console.log(error.message);
      } else if (error.response.status === 500) {
        console.error("Server Error. Please try again.");
      }
    }
    return Promise.reject(error);
  }
);

// return () => {
//   axiosInstance.interceptors.request.eject();
//   axiosInstance.interceptors.response.eject();
// };
export default axiosInstance;
