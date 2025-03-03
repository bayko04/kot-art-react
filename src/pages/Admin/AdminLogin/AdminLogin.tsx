import "./AdminLogin.scss";
import logoImg from "../../../shared/assets/images/svg/whiteLogo.svg";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../Auth/api/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Login is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const AdminLogin = () => {
  const navigate = useNavigate();
  const { mutate: signInFn, isSuccess, isPending } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IForm) => {
    signInFn({ email: data.email, password: data.password });
  };

  if (isSuccess) {
    navigate("/admin");
  }

  return (
    <div className="admin-login">
      <div className="admin-login__dashboard">
        <div className="admin-login__header">
          <div className="admin-login__logo">
            <img src={logoImg} alt="Logo" />
          </div>
          <p>Log in</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="admin-login__form">
          <div>
            <input {...register("email")} placeholder="Login" type="text" />
            {errors.email && (
              <p className="validateError">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("password")}
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <p className="validateError">{errors.password.message}</p>
            )}
          </div>
          <div>
            <button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
