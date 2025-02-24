import { useMutation } from "@tanstack/react-query";
import AuthService from "../../../../../shared/services/AuthService";

export function useCreateAdmin() {
  return useMutation({
    mutationKey: ["createAdmin"],
    mutationFn: async (data: { email: string; password: string }) => {
      const email = data.email;
      const password = data.password;
      const response = await AuthService.createAdmin(email, password);

      return response.data.results;
    },
  });
}
