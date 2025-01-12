import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../services/PaintingsService";

export function useCreateAuthor() {
  return useMutation({
    mutationKey: ["createAuthor"],
    mutationFn: async (data: any) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string | Blob);
      });

      const response = await PaintingsService.createCategory(formData);

      return response.data.results;
    },
  });
}
