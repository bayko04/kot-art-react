import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../shared/services/PaintingsService";

export function useCategoryPaints(
  page: number,
  pageSize: number,
  categoryTitle?: string
) {
  return useQuery({
    queryKey: ["getCategoryPaints", page, pageSize],
    queryFn: async () => {
      const response = await PaintingsService.paintingList(
        page,
        pageSize,
        categoryTitle
      );
      return response.data;
    },
    initialData: [],
  });
}
