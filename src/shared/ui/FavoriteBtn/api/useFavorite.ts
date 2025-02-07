import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../services/PaintingsService";

export function useAddFavorite() {
  return useMutation({
    mutationKey: ["addFavorite"],
    mutationFn: async (id: any) => {
      const response = await PaintingsService.paintingFollow(id);
      return response.data;
    },
  });
}

export function useDeleteFavorite() {
  return useMutation({
    mutationKey: ["stopFollow"],
    mutationFn: async (id: any) => {
      const response = await PaintingsService.paintingStopFollow(id);
      return response.data;
    },
  });
}
