import React, { useEffect } from "react";
import { useGetAuthors, useGetCategories } from "./api/useAuthors";
import "./EditPainting.scss";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import BasicBtn from "../../../../shared/ui/BasicBtn/BasicBtn";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPaint } from "./api/useGetPaint";
import BasicLoader from "../../../../shared/ui/BasicLoader/BasicLoader";
import {
  setIsDelete,
  setIsDeleteUrl,
} from "../../../../shared/store/reducers/usePopupsStore";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useEditPaint } from "./api/useEditPaint";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required"),
  currency: yup.string().required("Currency is required"),
  description: yup.string().required("Description is required"),
  width: yup
    .number()
    .typeError("Width must be a number")
    .required("Width is required"),
  height: yup
    .number()
    .typeError("Height must be a number")
    .required("Height is required"),
  author: yup.string().required("Select an artist"),
  categories: yup.array().min(1, "At least one category is required"),
  is_stock: yup.string().required("inStock is required"),

  images: yup.array().of(
    yup.object().shape({
      is_main: yup.boolean(),
      image: yup.mixed().notRequired(),
    })
  ),
});

const EditPainting = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data: authorsList } = useGetAuthors();
  const { data: categoriesList } = useGetCategories();
  const { mutate: editPaintFn, isSuccess, isPending } = useEditPaint();
  const { data: paintingData } = useGetPaint(Number(params.id));
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      price: 0,
      currency: "",
      description: "",
      width: 0,
      height: 0,
      author: "",
      categories: [],
      images: [],
      is_stock: "1",
    },
  });

  useEffect(() => {
    if (paintingData) {
      reset({
        title: paintingData.title || "",
        price: paintingData.price || "",
        currency: paintingData.currency || "",
        description: paintingData.description || "",
        width: paintingData.width || "",
        height: paintingData.height || "",
        author: paintingData.author?.id ? String(paintingData.author.id) : "",
        categories: paintingData.categories
          ? paintingData.categories.map((category: any) => String(category.id))
          : [],
        images: [],
        is_stock: (paintingData.is_stock ? "1" : "0") || "",
      });
    }
  }, [paintingData, reset]);

  const images: any = watch("images");

  const handleFileChange = (e: any) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      const updatedImages: any = [
        ...images,
        ...files.map((file, index) => ({
          is_main: images.length === 0 && index === 0,
          image: file,
        })),
      ];

      setValue("images", updatedImages, { shouldValidate: true });
    }
  };

  const onSubmit = (formData: any) => {
    editPaintFn({ data: formData, id: Number(params.id) });
  };

  const handleDelete = () => {
    dispatch(setIsDelete(true));
    if (params.id) {
      dispatch(setIsDeleteUrl(`/painting/admin/delete/${+params.id}/`));
    }
  };

  if (isSuccess) {
    navigate("/admin/paintings-list");
  }

  return (
    <div className="edit-paint">
      <div className="edit-pain__header">
        <h1 className="edit-paint__title">Редактировать картину</h1>
      </div>

      {paintingData ? (
        <form className="edit-paint__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" {...register("title")} />
            {errors.title && (
              <p className="validateError">{errors.title.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" {...register("price")} />
            {errors.price && (
              <p className="validateError">{errors.price.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <input type="text" id="currency" {...register("currency")} />
            {errors.currency && (
              <p className="validateError">{errors.currency.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" {...register("description")} />
            {errors.description && (
              <p className="validateError">{errors.description.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="width">Width</label>
            <input type="text" id="width" {...register("width")} />
            {errors.width && (
              <p className="validateError">{errors.width.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="height">Height</label>
            <input type="text" id="height" {...register("height")} />
            {errors.height && (
              <p className="validateError">{errors.height.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="author">Select an artist</label>
            <select id="author" {...register("author")}>
              {authorsList?.results?.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.author && (
              <p className="validateError">{errors.author.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="categories">Select a category</label>
            {/* <select id="categories" {...register("categories")}>
              {categoriesList?.results?.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            {errors.categories && (
              <p className="validateError">{errors.categories.message}</p>
            )} */}

            <div className="edit-paint__checkboxes">
              {categoriesList?.results?.map((item: any) => (
                <div key={item.id} className="edit-paint__checkbox">
                  <input
                    type="checkbox"
                    value={item.id}
                    {...register("categories")}
                    checked={watch("categories")?.includes(String(item.id))} // ✅ Проверяем, выбрана ли категория
                  />
                  <label>{item.title}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="is_stock">In stock</label>
            <select {...register("is_stock")}>
              <option value="1">yes</option>
              <option value="0">no</option>
            </select>
            <p className="validateError">{errors.is_stock?.message}</p>
          </div>

          <div className="form-group">
            <label htmlFor="image">Select a paint</label>
            <Controller
              control={control}
              name="images"
              render={({ field }) => (
                <>
                  <Uploader
                    multiply
                    // onFileChange={(e: any) => field.onChange(e.target.files[0])}
                    onFileChange={handleFileChange}
                  />
                  {errors.images && (
                    <p className="validateError">{errors.images.message}</p>
                  )}
                </>
              )}
            />
          </div>

          <div className="edit-paint__btns">
            {isPending ? (
              <ClipLoader />
            ) : (
              <>
                <BasicBtn clickFn={handleSubmit(onSubmit)} title="Edit" />
                <BasicBtn bg="red" clickFn={handleDelete} title="Delete" />
              </>
            )}
          </div>
        </form>
      ) : (
        <BasicLoader />
      )}
    </div>
  );
};

export default EditPainting;
