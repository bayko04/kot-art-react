import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../shared/store/reducers/usePaintingStore";

export function useGetPaintings({
  page,
  pageSize,
  authorId,
  categoryTitle,
}: {
  page: number;
  pageSize: number;
  authorId?: number | undefined;
  categoryTitle?: string;
}) {
  const dispatch = useDispatch();
  return useQuery({
    queryKey: ["getPaintings", authorId, pageSize, page],
    queryFn: async () => {
      const response = await PaintingsService.paintingList({
        page,
        pageSize,
        authorId,
        categoryTitle,
      });
      dispatch(setData(response.data));
      return response.data;
    },
    initialData: [],
  });
}
