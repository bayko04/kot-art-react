import React from "react";
import LogoTextImg from "../../images/png/logoText.png";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__wrapper">
          <div className="auth__upBg"></div>

          <form action="" className="auth__form">
            <div className="auth__email">
              <label htmlFor="">Введите email</label>
              <input type="text" />
            </div>
            <div className="auth__password">
              <label htmlFor="">Введите пароль</label>
              <input type="text" />
            </div>
          </form>

          <div className="auth__btns">
            {/* <Link to="" className="auth__singIn">
              Sign in
            </Link> */}
            <Link to="" className="auth__login">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
