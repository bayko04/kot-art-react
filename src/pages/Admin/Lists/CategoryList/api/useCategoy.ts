import { useQuery } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../shared/store/reducers/useCategoryStore";

export function useGetCategory() {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      const response = await PaintingsService.getCategoryList();
      console.log(response);
      dispatch(setData(response.data));
      return response.data;
    },
    initialData: [],
  });
}
