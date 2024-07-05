import React from "react";
import { Link } from "react-router-dom";
import firstImg from "../../images/png/viewAllCol/1.png";
import secondImg from "../../images/png/viewAllCol/2.png";
import thirdImg from "../../images/png/viewAllCol/3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BuyOnline = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          <Link to="/">All our collections</Link>
        </div>

        <Slider {...settings} className="buy-online__slider">
          <div className="buy-online__slide">
            <img src={firstImg} alt="" />
          </div>
          <div className="buy-online__slide">
            <img src={secondImg} alt="" />
          </div>
          <div className="buy-online__slide">
            <img src={thirdImg} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BuyOnline;
