import React, { useEffect } from "react";
import { useGetAuthors, useGetCategories } from "./api/useAuthors";
import "./EditPainting.scss";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import BasicBtn from "../../../../components/BasicBtn/BasicBtn";
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
  category: yup.string().required("Select a category"),
  is_stock: yup.string().required("inStock is required"),

  image: yup.mixed().notRequired(),
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
      category: "",
      image: null,
      is_stock: "1",
    },
  });

  console.log(paintingData);

  // После загрузки данных картины устанавливаем дефолтные значения
  useEffect(() => {
    if (paintingData) {
      reset({
        title: paintingData.title || "",
        price: paintingData.price || "",
        currency: paintingData.currency || "",
        description: paintingData.description || "",
        width: paintingData.width || "",
        height: paintingData.height || "",
        // Если в данных хранится объект автора/категории, берем его id
        author: paintingData.author?.id ? String(paintingData.author.id) : "",
        category: paintingData.category?.id
          ? String(paintingData.category.id)
          : "",
        image: null,
        is_stock: (paintingData.is_stock ? "1" : "0") || "",
      });
    }
  }, [paintingData, reset]);

  // Обработка отправки формы
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
              {authorsList?.map((item: any) => (
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
            <label htmlFor="category">Select a category</label>
            <select id="category" {...register("category")}>
              {categoriesList?.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="validateError">{errors.category.message}</p>
            )}
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
              name="image"
              render={({ field }) => (
                <>
                  <Uploader
                    onFileChange={(e: any) => field.onChange(e.target.files[0])}
                  />
                  {errors.image && (
                    <p className="validateError">{errors.image.message}</p>
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
