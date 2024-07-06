import React from "react";
import { Link } from "react-router-dom";
import firstImg from "../../images/png/newItems/1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const NewItems = () => {
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i: any) {
      return <div className="custom-dot"></div>;
    },
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="new-items">
      <div className="container">
        <h2 className="new-items__title">New items</h2>
        <p className="new-items__subtitle">
          <Link to="/">All paintings</Link>
        </p>

        <div className="slider-container">
          <Slider ref={slider} {...settings} className="new-items__slider">
            <div className="new-items__slide">
              <img src={firstImg} alt="" />
            </div>
            <div className="new-items__slide">
              <img src={firstImg} alt="" />
            </div>
            <div className="new-items__slide">
              <img src={firstImg} alt="" />
            </div>
            <div className="new-items__slide">
              <img src={firstImg} alt="" />
            </div>
          </Slider>
          <button
            className="custom-prev-arrow"
            onClick={() => slider?.current?.slickPrev()}
          >
            <img src="../../images/svg/arrow/Left.svg" alt="Previous" />
          </button>
          <button
            className="custom-next-arrow"
            onClick={() => slider?.current?.slickNext()}
          >
            <img src="../../images/svg/arrow/Right.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewItems;
