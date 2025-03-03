import { useMutation } from "@tanstack/react-query";
import AuthService from "../../../shared/services/AuthService";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../../shared/store/reducers/useAuthStore";

export function useSignUp() {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const response = await AuthService.registration(email, password);
      return response.data.results;
    },
  });
}

export function useSignIn() {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const response = await AuthService.login(email, password);
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);

      if (response.status === 200) {
        dispatch(setIsAuth(true));
      }

      return response.data;
    },
  });
}

export function useRefresh() {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["refresh"],
    mutationFn: async () => {
      const response = await AuthService.checkAuth();
      localStorage.setItem("accessToken", response.data.access);

      if (response.status === 200) {
        dispatch(setIsAuth(true));
      }

      return response.data;
    },
  });
}
