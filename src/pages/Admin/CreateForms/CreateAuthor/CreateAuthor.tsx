import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./CreateAuthor.scss";
import BasicBtn from "../../../../shared/ui/BasicBtn/BasicBtn";
import Uploader from "../../../../shared/ui/Uploader/Uploader";
import { useCreateAuthor } from "./api/useCreateAuthor";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const schema = yup.object().shape({
  name: yup.string().required("Artist's fullname is required"),
  bio: yup.string().required("Artist's bio is required"),
  whatsapp: yup.string().required("Artist's whatsapp is required"),
  instagram: yup.string().required("Artist's instagram is required"),
  avatar: yup
    .mixed()
    .test("required", "Avatar is required", (value) => !!value),
});

const CreateAuthor = () => {
  const navigate = useNavigate();
  const { mutate: createAuthorFn, isSuccess, isPending } = useCreateAuthor();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    createAuthorFn(data);
  };

  if (isSuccess) {
    navigate("/admin/authors-list");
  }

  return (
    <div className="create-author">
      <div className="create-author__header">
        <h1 className="create-author__title">Create artist</h1>
      </div>

      <form className="create-author__form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Artist's fullname</label>
          <input type="text" {...register("name")} />
          {errors.name && (
            <p className="validateError">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="bio">Artist's bio</label>
          <textarea {...register("bio")} />
          {errors.bio && <p className="validateError">{errors.bio.message}</p>}
        </div>

        <div>
          <label htmlFor="whatsapp">Artist's whatsapp phone</label>
          <input type="text" {...register("whatsapp")} />
          {errors.whatsapp && (
            <p className="validateError">{errors.whatsapp.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="instagram">Artist's instagram link</label>
          <input type="text" {...register("instagram")} />
          {errors.instagram && (
            <p className="validateError">{errors.instagram.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="avatar">Upload artist's picture</label>
          <Uploader
            onFileChange={(e: any) => {
              setValue("avatar", e.target.files[0]);
            }}
          />
          {errors.avatar && (
            <p className="validateError">{errors.avatar.message}</p>
          )}
        </div>

        <div className="create-author__btns">
          {isPending ? <ClipLoader /> : <BasicBtn title="Create" />}
        </div>
      </form>
    </div>
  );
};

export default CreateAuthor;
