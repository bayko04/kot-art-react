import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../../services/PaintingsService";

export function useGetCategory() {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      const response = await PaintingsService.getCategoryList();
      return response.data.results;
    },
    initialData: [],
  });
}
