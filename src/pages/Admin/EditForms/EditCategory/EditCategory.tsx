import { useEffect } from "react";
import { useEditCategory } from "./api/useEditCategory";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import BasicBtn from "../../../../shared/ui/BasicBtn/BasicBtn";
import "./EditCategory.scss";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCategories } from "../EditPainting/api/useAuthors";
import BasicLoader from "../../../../shared/ui/BasicLoader/BasicLoader";
import {
  setIsDelete,
  setIsDeleteUrl,
} from "../../../../shared/store/reducers/usePopupsStore";
import { ClipLoader } from "react-spinners";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Название категории обязательно"),
  image: yup.mixed().required("Изображение обязательно"),
});

const EditCategory = () => {
  const { mutate: editCategoryFn, isSuccess, isPending } = useEditCategory();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: categoryData, isFetching } = useGetCategories();

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
      image: "",
    },
  });

  useEffect(() => {
    if (categoryData && params.id) {
      const filtered = categoryData.filter(
        (item: any) => item.id === Number(params.id)
      );
      if (filtered.length > 0) {
        reset({
          title: filtered[0].title,
          image: "",
        });
      }
    }
  }, [categoryData, params.id, reset]);

  const onSubmit = (formData: any) => {
    editCategoryFn({ data: formData, id: Number(params.id) });
  };

  const handleDelete = () => {
    dispatch(setIsDelete(true));
    if (params.id) {
      dispatch(
        setIsDeleteUrl(`/painting/admin/category-delete/${+params.id}/`)
      );
    }
  };

  if (isSuccess) {
    navigate("/admin/category-list");
  }

  return (
    <div className="edit-category">
      <div className="edit-pain__header">
        <h1 className="edit-category__title">Редактировать категорию</h1>
      </div>

      {isFetching ? (
        <BasicLoader />
      ) : (
        <form className="edit-category__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">Название категории</label>
            <input type="text" id="title" {...register("title")} />
            {errors.title && (
              <p className="validateError">{errors.title.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="image">Выберите изображение</label>
            <Controller
              control={control}
              name="image"
              render={({ field }) => (
                <>
                  {/* Оборачиваем компонент Uploader в Controller */}
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
        </form>
      )}
      <div className="edit-category__btns">
        {isPending ? (
          <ClipLoader />
        ) : (
          <>
            <BasicBtn clickFn={handleSubmit(onSubmit)} title="Edit" />
            <BasicBtn bg="red" clickFn={handleDelete} title="Delete" />
          </>
        )}
      </div>
    </div>
  );
};

export default EditCategory;
