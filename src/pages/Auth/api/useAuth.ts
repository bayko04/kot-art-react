import { useQuery, useMutation } from "@tanstack/react-query";
import AuthService from "../../../shared/services/AuthService";

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
      localStorage.setItem("token", response.data.access);
      return response.data.results;
    },
  });
}

export function useConfirmGmail() {
  return useMutation({
    mutationKey: ["confirmGmail"],
    mutationFn: async ({
      email,
      confirmation_code,
    }: {
      email: string;
      confirmation_code: string;
    }) => {
      const response: any = await AuthService.verifyEmail(
        email,
        confirmation_code
      );
      return response.data.results;
    },
  });
}
