import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "./api/useAuth";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import eye from "../../shared/assets/images/svg/eye.svg";
import eyeHide from "../../shared/assets/images/svg/eyeHide.svg";

interface IForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

// ✅ Валидация с использованием `yup`
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUp: FC = () => {
  const { mutate: signUpFn, isSuccess, isPending } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const navigate = useNavigate();

  // ✅ Подключаем react-hook-form с yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IForm) => {
    signUpFn({ email: data.email, password: data.password });
  };

  if (isSuccess) {
    setTimeout(() => {
      navigate("/auth/sign-in");
    }, 3000);

    return (
      <div className="auth__form">
        <h2 className="auth__success">
          You have successfully created an account. <br />
          Then you will be redirected to the login page
        </h2>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
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

        <div className="auth__password">
          <label>Confirm Password</label>
          <div className="auth__pass-wrapper">
            <input
              {...register("passwordConfirm")}
              type={showRePassword ? "text" : "password"}
            />
            <div
              onClick={() => setShowRePassword((prev) => !prev)}
              className="auth__eye"
            >
              <img
                src={showRePassword ? eye : eyeHide}
                alt="toggle visibility"
              />
            </div>
          </div>
          {errors.passwordConfirm && (
            <p className="validateError">{errors.passwordConfirm.message}</p>
          )}
        </div>

        <div className="auth__btns">
          {isPending ? (
            <ClipLoader />
          ) : (
            <button type="submit" className="auth__login">
              Sign up
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
