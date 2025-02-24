import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useEditCategory() {
  return useMutation({
    mutationKey: ["editCategory"],
    mutationFn: async ({ data, id }: { data: any; id: number }) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value as string | Blob);
        }
      });

      const response = await PaintingsService.updateCategoryPatch(formData, id);

      return response.data.results;
    },
  });
}
