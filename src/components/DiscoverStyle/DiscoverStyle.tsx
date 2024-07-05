import React from "react";
import { filterData } from "../../staticData/filterData";

const DiscoverStyle = () => {
  return (
    <div className="discover-style">
      <div className="container">
        <h2 className="discover-style__title">Browse your style</h2>
        <p className="discover-style__text">
          Discover New Art from our curated selection of international artists
        </p>

        <form action="" className="discover-style__form">
          <select className="discover-style__medium" name="" id="">
            <option value="">home</option>
            <option value="">job</option>
          </select>
          <select className="discover-style__size" name="" id="">
            <option value="">home</option>
            <option value="">job</option>
          </select>
          <select className="discover-style__price" name="" id="">
            <option value="">home</option>
            <option value="">job</option>
          </select>
          <button className="discover-style__btn">search</button>
        </form>
        <ul className="discover-style__filter">
          {filterData.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscoverStyle;
