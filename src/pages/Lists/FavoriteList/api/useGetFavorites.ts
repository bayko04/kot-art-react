import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../shared/services/PaintingsService";

export function useGetFavorites() {
  return useQuery({
    queryKey: ["getFollowList"],
    queryFn: async () => {
      const response = await PaintingsService.paintingFollowList();
      return response.data.results;
    },
    initialData: [],
  });
}
