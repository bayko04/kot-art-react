import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import firstImg from "../../images/png/slider1/1.png";
import secondImg from "../../images/png/slider1/2.png";
import thirdImg from "../../images/png/slider1/3.png";
import fourthImg from "../../images/png/slider1/4.png";
import fivethImg from "../../images/png/slider1/5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AllCategories.scss";

const AllCategories = () => {
  const slider = useRef<any>(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    swipeToSlide: true, // Позволяет тянуть на любое расстояние
    variableWidth: false, // Можно попробовать true, но тогда нужно убедиться, что ширина у элементов корректная

    customPaging: function (i: any) {
      return <div className="custom-dot"></div>;
    },
    dotsClass: "slick-dots custom-dots",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleNavigate = () => {
    navigate("/category/KOTART COLLECTION");
  };

  return (
    <div className="all-categories">
      <h2 className="all-categories__title">Shop by Category</h2>
      <p className="all-categories__subtitle">
        <Link to="/all-paintings">All paintings</Link>
      </p>

      <div className="slider-container">
        <Slider {...settings} className="all-categories__slider">
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={firstImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={secondImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={thirdImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={fourthImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={fivethImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          {//ddd
          }
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={firstImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={secondImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={thirdImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={fourthImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div onClick={handleNavigate} className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={fivethImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
        </Slider>
        <div className="all-categories__btn">
          <button onClick={() => navigate("/all-categories")}>
            Shop for Art
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
