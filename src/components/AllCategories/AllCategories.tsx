import React, { useRef } from "react";
import { Link } from "react-router-dom";
import firstImg from "../../images/png/slider1/1.png";
import secondImg from "../../images/png/slider1/2.png";
import thirdImg from "../../images/png/slider1/3.png";
import fourthImg from "../../images/png/slider1/4.png";
import fivethImg from "../../images/png/slider1/5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllCategories = () => {
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,

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

  return (
    <div className="all-categories">
      <h2 className="all-categories__title">Shop by Category</h2>
      <p className="all-categories__subtitle">
        <Link to="/">All paintings</Link>
      </p>

      <div className="slider-container">
        <Slider {...settings} className="all-categories__slider">
          <div className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={firstImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={secondImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={thirdImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={fourthImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
          <div className="all-categories__slide">
            <div className="all-categories__painting">
              <img src={fivethImg} alt="" />
            </div>
            <p className="all-categories__name">KOTART COLLECTION</p>
          </div>
        </Slider>
        <div className="all-categories__btn">
          <button>Shop for Art</button>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
