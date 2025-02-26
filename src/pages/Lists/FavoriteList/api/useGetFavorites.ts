import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../shared/services/PaintingsService";

export function useGetFavorites(page: number, pageSize: number) {
  return useQuery({
    queryKey: ["getFollowList", page, pageSize],
    queryFn: async () => {
      const response = await PaintingsService.paintingFollowList(
        page,
        pageSize
      );
      return response.data;
    },
    initialData: [],
  });
}
