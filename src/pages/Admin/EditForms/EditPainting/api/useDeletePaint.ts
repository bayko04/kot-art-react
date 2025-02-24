import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useDeletePaint() {
  return useMutation({
    mutationKey: ["deletePaint"],
    mutationFn: async ({ id }: { id: number }) => {
      const response = await PaintingsService.deletePainting(id);
      console.log("deleted");
      return response.data.results;
    },
  });
}
