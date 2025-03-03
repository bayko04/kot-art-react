import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const { isAuth } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const PRIVATE_ROUTES = ["/auth/sign-in", "/auth/sign-up"];

  if (isAuth && PRIVATE_ROUTES.includes(pathname)) {
    navigate("/");
  }

  return <></>;
};

export default PrivateRoutes;
