import { useEffect } from "react";
import "./EditAuthor.scss";
import BasicBtn from "../../../../shared/ui/BasicBtn/BasicBtn";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import { useGetAuthors } from "../EditPainting/api/useAuthors";
import { useNavigate, useParams } from "react-router-dom";
import { useEditAuthor } from "./api/useEditAuthor";
import BasicLoader from "../../../../shared/ui/BasicLoader/BasicLoader";
import {
  setIsDelete,
  setIsDeleteUrl,
} from "../../../../shared/store/reducers/usePopupsStore";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Имя автора обязательно"),
  bio: yup.string().required("Биография обязательна"),
  avatar: yup.mixed().required("Аватар обязателен"),
});

const EditAuthor = () => {
  const { data: authorsData, isFetching } = useGetAuthors();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: editAuthorFn, isSuccess, isPending } = useEditAuthor();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      avatar: "",
    },
  });

  // После загрузки данных автора устанавливаем дефолтные значения
  useEffect(() => {
    if (authorsData && params.id) {
      const filtered = authorsData.filter(
        (item: any) => item.id === Number(params.id)
      );
      if (filtered.length > 0) {
        reset({
          name: filtered[0].name,
          bio: filtered[0].bio,
          avatar: "",
        });
      }
    }
  }, [authorsData, params.id, reset]);

  // Обработка отправки формы
  const onSubmit = (formData: any) => {
    editAuthorFn({ data: formData, id: Number(params.id) });
  };

  const handleDelete = () => {
    dispatch(setIsDelete(true));
    if (params.id) {
      dispatch(setIsDeleteUrl(`/painting/admin/author-delete/${+params.id}/`));
    }
  };

  if (isSuccess) {
    navigate("/admin/authors-list");
  }

  return (
    <div className="edit-author">
      <div className="edit-author__header">
        <h1 className="edit-author__title">Редактировать автора</h1>
      </div>

      {isFetching ? (
        <BasicLoader />
      ) : (
        <form className="edit-author__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Полное имя автора</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <p className="validateError">{errors.name.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="bio">Биография автора</label>
            <textarea id="bio" {...register("bio")}></textarea>
            {errors.bio && (
              <p className="validateError">{errors.bio.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Загрузить фото автора</label>
            <Controller
              control={control}
              name="avatar"
              render={({ field }) => (
                <>
                  <Uploader
                    onFileChange={(e: any) => field.onChange(e.target.files[0])}
                  />
                  {errors.avatar && (
                    <p className="validateError">{errors.avatar.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </form>
      )}
      <div className="edit-author__btns">
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

export default EditAuthor;
