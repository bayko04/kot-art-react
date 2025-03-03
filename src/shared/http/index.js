import axios from "axios";

export const API_URL = "https://artmarket-1.onrender.com/api";

const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    console.error("Token not found in localStorage");
  }

  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const response = await axios.post(`${API_URL}/user/token/refresh/`, {
          refresh: refreshToken,
        });
        localStorage.setItem("refreshToken", response.data.refresh);
        localStorage.setItem("accessToken", response.data.access);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  }
);

export default $api;
