import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../../services/PaintingsService";

export function useGetPaintings() {
  return useQuery({
    queryKey: ["getPaintings"],
    queryFn: async () => {
      const response = await PaintingsService.paintingList();
      return response.data.results;
    },
    initialData: [],
  });
}
