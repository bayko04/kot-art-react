import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../../services/PaintingsService";

export function useGetAuthors() {
  return useQuery({
    queryKey: ["getAuthors"],
    queryFn: async () => {
      const response = await PaintingsService.getAuthors();
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
