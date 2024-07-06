import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBurger } from "../../store/reducers/BurgerSlice";

const Burger = () => {
  const dispatch = useDispatch();
  const { burger } = useSelector((state: any) => state.burger);

  const toggleBurger = () => {
    dispatch(setBurger());
  };

  return (
    <div onClick={toggleBurger} className={`burger ${burger ? "active" : ""}`}>
      <span></span>
    </div>
  );
};

export default Burger;
