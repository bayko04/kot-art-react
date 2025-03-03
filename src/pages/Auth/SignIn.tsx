import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "./api/useAuth";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import eye from "../../shared/assets/images/svg/eye.svg";
import eyeHide from "../../shared/assets/images/svg/eyeHide.svg";

interface IForm {
  email: string;
  password: string;
}

// ✅ Валидация с `yup`
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignIn: FC = () => {
  const { mutate: signInFn, isSuccess, isPending, isError } = useSignIn();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // ✅ Используем `react-hook-form`
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
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
        {isError && (
          <p style={{ margin: "0 0 40px 0" }} className="validateError">
            Login or password is incorrect
          </p>
        )}

        <div className="auth__email">
          <label>Email</label>
          <input {...register("email")} type="text" />
          {errors.email && (
            <p className="validateError">{errors.email.message}</p>
          )}
        </div>

        <div className="auth__password">
          <label>Password</label>
          <div className="auth__pass-wrapper">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="auth__eye"
            >
              <img src={showPassword ? eye : eyeHide} alt="toggle visibility" />
            </div>
          </div>
          {errors.password && (
            <p className="validateError">{errors.password.message}</p>
          )}
        </div>

        <div className="auth__btns">
          {isPending ? (
            <ClipLoader />
          ) : (
            <button type="submit" className="auth__login">
              Sign in
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
