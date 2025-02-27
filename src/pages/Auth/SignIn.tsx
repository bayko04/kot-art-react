import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "./api/useAuth";
import { ClipLoader } from "react-spinners";
import eye from "../../shared/assets/images/svg/eye.svg";
import eyeHide from "../../shared/assets/images/svg/eyeHide.svg";

interface IForm {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const { mutate: signInFn, isSuccess, isPending } = useSignIn();
  const [showPassowrd, setShowPassowrd] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
  });

  const handleOnChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev: IForm) => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {
    signInFn({ email: form.email, password: form.password });
  };

  const toggleShowPass = () => {
    setShowPassowrd((prev) => !prev);
  };

  if (isSuccess) {
    navigate("/");
  }

  return (
    <div>
      <form action="" className="auth__form">
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
      </form>

      <div className="auth__btns">
        {/* <Link to="" className="auth__singIn">
              Sign in
            </Link> */}
        {isPending ? (
          <ClipLoader />
        ) : (
          <Link onClick={onSubmit} to="" className="auth__login">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default SignIn;
