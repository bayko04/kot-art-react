import axios from "axios";
import $api, { API_URL } from "../http/index";

export default class AuthService {
  static async registration(email: string, password: string) {
    return axios.post(`${API_URL}/user/register/`, {
      email,
      password,
    });
  }
  static async login(email: string, password: string) {
    return axios.post(`${API_URL}/user/login/`, { email, password });
  }
  static async createAdmin(email: string, password: string) {
    return axios.post(`${API_URL}/user/admin_create/`, { email, password });
  }
  static async verifyEmail(email: string, confirmation_code: string) {
    axios.post(`${API_URL}/user/verify-email/`, { email, confirmation_code });
  }
  static async checkAuth() {
    const refreshToken = localStorage.getItem("refreshToken");
    return $api.post("/user/token/refresh/", {
      refresh: refreshToken,
    });
  }
  static async logout() {
    $api.post("/user/logout/");
  }
}
