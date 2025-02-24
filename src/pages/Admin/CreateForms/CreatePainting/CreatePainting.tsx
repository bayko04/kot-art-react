import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGetAuthors, useGetCategories } from "./api/useAuthors";
import { useCreatePaint } from "./api/useCreatePaint";
import "./CreatePainting.scss";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import BasicBtn from "../../../../shared/ui/BasicBtn/BasicBtn";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

// Схема валидации
const schema = yup.object().shape({
  title: yup.string().required("Name is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than zero")
    .required("Price is required"),
  currency: yup.string().required("Currency is required"),
  description: yup.string().required("Description is required"),
  width: yup
    .number()
    .typeError("Width must be a number")
    .positive("Width must be greater than zero")
    .required("Width is required"),
  height: yup
    .number()
    .typeError("Height must be a number")
    .positive("Height must be greater than zero")
    .required("Height is required"),
  author: yup.string().required("Artist is required"),
  categories: yup.string().required("Category is required"),
  is_stock: yup.string().required("inStock is required"),
  images: yup
    .array()
    .of(
      yup.object().shape({
        is_main: yup.boolean(),
        image: yup.mixed().required("Image file is required"),
      })
    )
    .min(1, "At least one image is required"),
});

const CreatePainting = () => {
  const { data: authorsList } = useGetAuthors();
  const { data: categoriesList } = useGetCategories();
  const { mutate: createPaintFn, isSuccess, isPending } = useCreatePaint();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      price: 0,
      currency: "USD",
      description: "",
      width: 0,
      height: 0,
      author: "",
      categories: "",
      images: [],
      is_stock: "1",
    },
  });

  // Следим за загруженными изображениями
  const images: any = watch("images");

  // Обработчик загрузки файлов
  const handleFileChange = (e: any) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      // Добавляем новые файлы к уже существующим
      const updatedImages: any = [
        ...images,
        ...files.map((file, index) => ({
          is_main: images.length === 0 && index === 0, // Первый загруженный файл становится is_main
          image: file,
        })),
      ];

      setValue("images", updatedImages, { shouldValidate: true });
    }
  };

  const onSubmit = (data: any) => {
    createPaintFn(data);
  };

  if (isSuccess) {
    navigate("/admin/paintings-list");
  }

  return (
    <div className="create-paint">
      <div className="create-paint__header">
        <h1 className="create-paint__title">Create painting</h1>
      </div>

      <form className="create-paint__form" onSubmit={handleSubmit(onSubmit)}>
        {/* Поля формы */}
        <div>
          <label htmlFor="title">Name</label>
          <input type="text" {...register("title")} />
          <p className="validateError">{errors.title?.message}</p>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input type="text" {...register("price")} />
          <p className="validateError">{errors.price?.message}</p>
        </div>

        <div>
          <label htmlFor="currency">Currency</label>
          <select {...register("currency")}>
            <option value="USD">USD</option>
          </select>
          <p className="validateError">{errors.currency?.message}</p>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input type="text" {...register("description")} />
          <p className="validateError">{errors.description?.message}</p>
        </div>

        <div>
          <label htmlFor="width">Width</label>
          <input type="text" {...register("width")} />
          <p className="validateError">{errors.width?.message}</p>
        </div>

        <div>
          <label htmlFor="height">Height</label>
          <input type="text" {...register("height")} />
          <p className="validateError">{errors.height?.message}</p>
        </div>

        <div>
          <label htmlFor="author">Select an artist</label>
          <select {...register("author")}>
            <option value="">Select an artist</option>
            {authorsList?.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <p className="validateError">{errors.author?.message}</p>
        </div>

        <div>
          <label htmlFor="categories">Select a category</label>
          <select {...register("categories")}>
            <option value="">Select a category</option>
            {categoriesList?.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
          <p className="validateError">{errors.categories?.message}</p>
        </div>

        <div>
          <label htmlFor="is_stock">In stock</label>
          <select {...register("is_stock")}>
            <option value="1">yes</option>
            <option value="0">no</option>
          </select>
          <p className="validateError">{errors.is_stock?.message}</p>
        </div>

        <div>
          <label htmlFor="image">Select paintings</label>
          <Uploader images={images} multiply onFileChange={handleFileChange} />
          <p className="validateError">{errors.images?.message}</p>
        </div>

        {/* Кнопка */}
        <div className="create-paint__btns">
          {isPending ? <ClipLoader /> : <BasicBtn title="Create" />}
        </div>
      </form>
    </div>
  );
};

export default CreatePainting;
