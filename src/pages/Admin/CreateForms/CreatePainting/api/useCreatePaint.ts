import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../shared/services/PaintingsService";

export function useCreatePaint() {
  return useMutation({
    mutationKey: ["createPaint"],
    mutationFn: async (data: any) => {
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
        } else {
          formData.append(key, value as string | Blob);
        }
      });

      const response = await PaintingsService.createPainting(formData);

      return response.data;
    },
  });
}
