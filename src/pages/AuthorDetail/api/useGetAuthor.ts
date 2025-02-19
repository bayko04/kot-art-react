import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../shared/services/PaintingsService";

export function useGetAuthor(id: number) {
  return useQuery({
    queryKey: ["getAuthor", id],
    queryFn: async () => {
      const response = await PaintingsService.authorRetrieve(id);
      return response.data;
    },
    initialData: [],
  });
}
