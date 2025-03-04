import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useGetAuthors(page?: number, pageSize?: number) {
  return useQuery({
    queryKey: ["getAuthors", page, pageSize],
    queryFn: async () => {
      const response = await PaintingsService.getAuthors(page, pageSize);
      return response.data;
    },
    initialData: [],
  });
}

export function useGetCategories() {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      const response = await PaintingsService.getCategoryList();
      return response.data;
    },
    initialData: [],
  });
}
