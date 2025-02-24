import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useConfirmGmail, useSignUp } from "./api/useAuth";

interface IForm {
  email: string;
  code: string;
}

const ConfirmEmail: FC = () => {
  const { mutate: confrimGmailFn, isSuccess } = useConfirmGmail();
  const navigate = useNavigate();
  const [form, setForm] = useState<IForm>({
    email: "",
    code: "",
  });

  const handleOnChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev: IForm) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    confrimGmailFn({ email: form.email, confirmation_code: form.code });
  };

  if (isSuccess) {
    // navigate();
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
          <label htmlFor="">Введите email</label>
          <input
            onChange={handleOnChnage}
            value={form.email}
            name="email"
            type="text"
          />
        </div>
        <div className="auth__password">
          <label htmlFor="">Введите код</label>
          <input
            onChange={handleOnChnage}
            value={form.code}
            name="code"
            type="text"
          />
        </div>
      </form>

      <div className="auth__btns">
        <Link onClick={handleSubmit} to="" className="auth__login">
          Отправить код
        </Link>
      </div>
    </div>
  );
};

export default ConfirmEmail;
