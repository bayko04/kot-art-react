import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../services/PaintingsService";

export function useDelete() {
  return useMutation({
    mutationKey: ["delete"],
    mutationFn: async (url: string) => {
      const response = await PaintingsService.delete(url);
      return response.data.results;
    },
  });
}
