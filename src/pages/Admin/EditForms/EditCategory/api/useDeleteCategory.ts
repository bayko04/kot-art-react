import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useDeleteCategory() {
  return useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: async ({ id }: { id: number }) => {
      const response = await PaintingsService.deleteCategory(id);
      return response.data.results;
    },
  });
}
