import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useEditPaint() {
  return useMutation({
    mutationKey: ["editPaint"],
    mutationFn: async ({ data, id }: { data: any; id: number }) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (key === "images" && Array.isArray(value)) {
          value.forEach((imageObj, index) => {
            formData.append(
              `images[${index}]is_main`,
              String(imageObj.is_main)
            );
            formData.append(`images[${index}]image`, imageObj.image);
          });
        } else if (key === "categories") {
          formData.append(`categories[0]`, value as string);
        } else {
          formData.append(key, value as string | Blob);
        }
      });

      const response = await PaintingsService.updatePaintingPatch(formData, id);

      return response.data.results;
    },
  });
}
