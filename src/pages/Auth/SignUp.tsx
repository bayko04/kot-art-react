import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "./api/useAuth";
import { ClipLoader } from "react-spinners";
import eye from "../../shared/assets/images/svg/eye.svg";
import eyeHide from "../../shared/assets/images/svg/eyeHide.svg";

interface IForm {
  email: string;
  password: string;
  passowrdConfirm: string;
}

const SignUp: FC = () => {
  const { mutate: signUpFn, isSuccess, isPending } = useSignUp();
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [showRePassowrd, setShowRePassowrd] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
    passowrdConfirm: "",
  });

  const handleOnChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev: IForm) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    signUpFn({ email: form.email, password: form.password });
  };

  if (isSuccess) {
    navigate("/auth/sign-in");
  }

  const toggleShowPass = () => {
    setShowPassowrd((prev) => !prev);
  };
  const toggleShowRePass = () => {
    setShowRePassowrd((prev) => !prev);
  };

  return (
    <div>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
        }}
        action=""
        className="auth__form"
      >
        <div className="auth__email">
          <label htmlFor="">Enter your email</label>
          <input
            onChange={handleOnChnage}
            value={form.email}
            name="email"
            type="text"
          />
        </div>
        <div className="auth__password">
          <label htmlFor="">Enter your password</label>

          <div className="auth__pass-wrapper">
            <input
              onChange={handleOnChnage}
              value={form.password}
              name="password"
              type={showPassowrd ? "text" : "password"}
            />

            {showPassowrd ? (
              <div onClick={toggleShowPass} className="auth__eye-open">
                <img src={eye} alt="" />
              </div>
            ) : (
              <div onClick={toggleShowPass} className="auth__eye-closed">
                <img src={eyeHide} alt="" />
              </div>
            )}
          </div>
        </div>
        <div className="auth__password">
          <label htmlFor="">Re-enter the password</label>

          <div className="auth__pass-wrapper">
            <input
              onChange={handleOnChnage}
              value={form.passowrdConfirm}
              name="passowrdConfirm"
              type={showRePassowrd ? "text" : "password"}
            />

            {showPassowrd ? (
              <div onClick={toggleShowRePass} className="auth__eye-open">
                <img src={eye} alt="" />
              </div>
            ) : (
              <div onClick={toggleShowRePass} className="auth__eye-closed">
                <img src={eyeHide} alt="" />
              </div>
            )}
          </div>
        </div>
      </form>

      <div className="auth__btns">
        {isPending ? (
          <ClipLoader />
        ) : (
          <Link onClick={handleSubmit} to="" className="auth__login">
            Sign up
          </Link>
        )}
      </div>
    </div>
  );
};

export default SignUp;
