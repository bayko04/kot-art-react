import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useCreateCategory() {
  return useMutation({
    mutationKey: ["createCategory"],
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
