import { useMutation } from "@tanstack/react-query";
import PaintingsService from "../../../../../services/PaintingsService";

export function useCreatePaint() {
  return useMutation({
    mutationKey: ["createPaint"],
    mutationFn: async (data: any) => {
      // Создаем новый объект FormData
      const formData = new FormData();

      // Добавляем каждое поле из объекта data в formData
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string | Blob);
      });

      // Отправляем formData
      console.log(formData);
      const response = await PaintingsService.createPainting(formData);

      return response.data.results;
    },
  });
}
