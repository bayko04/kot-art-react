import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useDeleteAuthor() {
  return useMutation({
    mutationKey: ["deleteAuthor"],
    mutationFn: async ({ id }: { id: number }) => {
      const response = await PaintingsService.deleteAuthor(id);
      return response.data.results;
    },
  });
}
