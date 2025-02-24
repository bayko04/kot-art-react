import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBurger } from "../../shared/store/reducers/BurgerSlice";
import "./Burger.scss";

const Burger = () => {
  const dispatch = useDispatch();
  const { burger } = useSelector((state: any) => state.burger);

  const toggleBurger = () => {
    burger ? dispatch(setBurger(false)) : dispatch(setBurger(true));
  };

  return (
    <div onClick={toggleBurger} className={`burger ${burger ? "active" : ""}`}>
      <span></span>
    </div>
  );
};

export default Burger;
