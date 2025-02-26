import axios from "axios";

export const API_URL = "https://artmarket-1.onrender.com/api";

const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  // if (token) {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQwNTM4OTk3LCJpYXQiOjE3NDA1MzUzOTcsImp0aSI6IjIwNjAxYzU0MWIxNTQ1MmZiYTExYjYxZWYwYTdkOWZkIiwidXNlcl9pZCI6MX0.Z2cslZi61BiSOy6OaIk7YtK7IYY7lpu2iKzW26whmCk`;
  // } else {
  console.error("Token not found in localStorage");
  // }

  return config;
});

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status == 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(`${API_URL}/user/token/refresh/`, {
//           withCredentials: true,
//         });
//         localStorage.setItem("token", response.data.access);
//         return $api.request(originalRequest);
//       } catch (e) {
//         console.log("НЕ АВТОРИЗОВАН");
//       }
//     }
//     throw error;
//   }
// );

export default $api;
