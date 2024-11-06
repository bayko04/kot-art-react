import React, { useRef } from "react";
import Slider from "react-slick";
import LineSlide from "./LineSlide/LineSlide";
import leftArrow from "../../images/svg/arrow/leftPink.svg";
import rightArrow from "../../images/svg/arrow/RightBlue.svg";

const LineSlider = ({ title }: { title: string }) => {
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,

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
    <div className="line-slider">
      <h2 className="line-slider__title">{title}</h2>

      <div className="line-slider__container">
        <Slider ref={slider} {...settings} className="line-slider__slider">
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
        </Slider>

        <div className="line-slider__btns">
          <button
            className="custom-prev-line-slider"
            onClick={() => slider?.current?.slickPrev()}
          ></button>
          <button
            className="custom-next-line-slider"
            onClick={() => slider?.current?.slickNext()}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default LineSlider;
