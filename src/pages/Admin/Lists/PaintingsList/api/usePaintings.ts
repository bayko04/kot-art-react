import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../shared/store/reducers/usePaintingStore";

export function useGetPaintings(authorId?: number) {
  const dispatch = useDispatch();
  return useQuery({
    queryKey: ["getPaintings", authorId],
    queryFn: async () => {
      const response = await PaintingsService.paintingList(authorId);

      console.log(authorId);

      dispatch(setData(response.data));
      return response.data.results;
    },
    initialData: [],
  });
}
