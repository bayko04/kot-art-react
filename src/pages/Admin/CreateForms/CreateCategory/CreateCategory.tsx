import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateCategory } from "./api/useCreateCategory";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import BasicBtn from "../../../../shared/ui/BasicBtn/BasicBtn";
import "./CreateCategory.scss";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

// Схема валидации
const schema = yup.object().shape({
  title: yup.string().required("Category name is required"),
  image: yup.mixed().test("required", "Image is required", (value) => !!value),
});

const CreateCategory = () => {
  const {
    mutate: createCategoryFn,
    isSuccess,
    isPending,
  } = useCreateCategory();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    createCategoryFn(data);
  };

  if (isSuccess) {
    navigate("/admin/category-list");
  }

  return (
    <div className="create-category">
      <div className="create-category__header">
        <h1 className="create-category__title">Create category</h1>
      </div>

      <form className="create-category__form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Category name</label>
          <input type="text" {...register("title")} />
          {errors.title && (
            <p className="validateError">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="image">Select a painting</label>
          <Uploader
            onFileChange={(e: any) => {
              setValue("image", e.target.files[0]);
            }}
          />
          {errors.image && (
            <p className="validateError">{errors.image.message}</p>
          )}
        </div>

        <div className="create-category__btns">
          {isPending ? <ClipLoader /> : <BasicBtn title="Create" />}
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
