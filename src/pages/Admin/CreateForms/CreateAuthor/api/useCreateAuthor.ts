import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useCreateAuthor() {
  return useMutation({
    mutationKey: ["createAuthor"],
    mutationFn: async (data: any) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string | Blob);
      });

      console.log(formData);
      const response = await PaintingsService.AuthorCreate(formData);

      return response.data.results;
    },
  });
}
