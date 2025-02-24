import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import firstImg from "../../shared/assets/images/png/viewAllCol/1.png";
import secondImg from "../../shared/assets/images/png/viewAllCol/2.png";
import thirdImg from "../../shared/assets/images/png/viewAllCol/3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BuyOnlineCard from "./BuyOnlineCard/BuyOnlineCard";
import "./BuyOnline.scss";

const BuyOnline = () => {
  const slider = useRef<any>(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNavigate = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigate("painting-details");
  };

  return (
    <div className="buy-online">
      <div className="container">
        <h2 className="buy-online__title">
          Buy art online that matches your style
        </h2>
        <p className="buy-online__text">
          Discover our curation of original artworks for sale.
        </p>
        <div className="buy-online__all-collection">
          <Link to="/all-categories">All our collections</Link>
        </div>

        <div className="slider-container">
          <Slider ref={slider} {...settings} className="buy-online__slider">
            <BuyOnlineCard handleNavigate={handleNavigate} img={firstImg} />
            <BuyOnlineCard handleNavigate={handleNavigate} img={secondImg} />
            <BuyOnlineCard handleNavigate={handleNavigate} img={thirdImg} />
            <BuyOnlineCard handleNavigate={handleNavigate} img={firstImg} />
            <BuyOnlineCard handleNavigate={handleNavigate} img={secondImg} />
            <BuyOnlineCard handleNavigate={handleNavigate} img={thirdImg} />
          </Slider>

          <button
            className="custom-prev-arrow"
            onClick={() => slider?.current?.slickPrev()}
          >
            <img
              src="../../shared/assets/images/svg/arrow/Left.svg"
              alt="Previous"
            />
          </button>
          <button
            className="custom-next-arrow"
            onClick={() => slider?.current?.slickNext()}
          >
            <img
              src="../../shared/assets/images/svg/arrow/Right.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyOnline;
