import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "./api/useAuth";
import { ClipLoader } from "react-spinners";

interface IForm {
  email: string;
  password: string;
  passowrdConfirm: string;
}

const SignUp: FC = () => {
  const { mutate: signUpFn, isSuccess, isPending } = useSignUp();
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
    navigate("/confirm-email");
  }

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
          <input
            onChange={handleOnChnage}
            value={form.password}
            name="password"
            type="text"
          />
        </div>
        <div className="auth__password">
          <label htmlFor="">Re-enter the password</label>
          <input
            onChange={handleOnChnage}
            value={form.passowrdConfirm}
            name="passowrdConfirm"
            type="text"
          />
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
