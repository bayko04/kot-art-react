import React from "react";
import LogoTextImg from "../../images/png/logoText.png";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth__logo">
        <img src={LogoTextImg} alt="" />
      </div>

      <div className="auth__btns">
        <Link to="" className="auth__singIn">
          Sign in
        </Link>
        <Link to="" className="auth__login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Auth;
