import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

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
