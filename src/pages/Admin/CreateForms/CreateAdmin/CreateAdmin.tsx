import BasicBtn from "../../../../shared/ui/BasicBtn/BasicBtn";
import "./CreateAdmin.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateAdmin } from "./api/useCreateAdmin";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const CreateAdmin = () => {
  const { mutate: createAdmin, isSuccess, isPending } = useCreateAdmin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    createAdmin(data);
  };

  if (isSuccess) {
    navigate("/admin/create-roles");
  }
  return (
    <div className="create-admin">
      <div className="create-admin__header">
        <h1 className="create-admin__title">Give role</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="create-admin__form">
        <div className="">
          <label htmlFor="name">Email</label>
          <input {...register("email")} type="email" />
          {errors.email && (
            <p className="validateError">{errors.email.message}</p>
          )}
        </div>
        <div className="">
          <label htmlFor="name">Password</label>
          <input {...register("password")} type="text" />
          {errors.password && (
            <p className="validateError">{errors.password.message}</p>
          )}
        </div>

        <div className="create-admin__btns">
          {isPending ? <ClipLoader /> : <BasicBtn title="Create" />}
        </div>
      </form>
    </div>
  );
};

export default CreateAdmin;
