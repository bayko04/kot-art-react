import { FC } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Outlet } from "react-router-dom";
import "./Auth.scss";

const Auth: FC = () => {
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__wrapper">
          <div className="auth__upBg"></div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
