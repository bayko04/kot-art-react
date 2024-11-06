import React from "react";
import Header from "../components/Header/Header";
import UnderHeader from "../components/UnderHeader/UnderHeader";
import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <UnderHeader />
      <Outlet />
    </>
  );
};

export default HeaderLayout;
