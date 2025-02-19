import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../shared/services/PaintingsService";

export function useCategoryPaints(categoryTitle: string) {
  return useQuery({
    queryKey: ["getCategoryPaints"],
    queryFn: async () => {
      const response = await PaintingsService.paintingList(/* categoryTitle */);
      return response.data.results;
    },
    initialData: [],
  });
}
