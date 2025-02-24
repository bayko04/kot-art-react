import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useGetPaint(id: number) {
  return useQuery({
    queryKey: ["getPaint", id],
    queryFn: async () => {
      const response = await PaintingsService.paintingRetrieve(id);
      return response.data;
    },
    initialData: [],
  });
}
