import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import firstImg from "../../images/png/viewAllCol/1.png";
import secondImg from "../../images/png/viewAllCol/2.png";
import thirdImg from "../../images/png/viewAllCol/3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heartImg from "../../images/svg/header/favoriteUn.svg";
import FavoriteBtn from "../../shared/ui/FavoriteBtn/FavoriteBtn";

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

  const handleNavigate = (e: any) => {
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
            <div onClick={handleNavigate} className="buy-online__slide">
              <div className="buy-online__sliderUp">
                <FavoriteBtn />
              </div>

              <div className="buy-online__painting">
                <img src={firstImg} alt="" />
              </div>

              <div className="buy-online__content">
                <h5 className="buy-online__name">MOVIE TIME</h5>
                <p className="buy-online__description">
                  Original artwork. Mixed media on canvas. 130x100 cm
                </p>
                <p className="buy-online__price">$5,500</p>
              </div>
            </div>

            <div onClick={handleNavigate} className="buy-online__slide">
              <div className="buy-online__sliderUp">
                <FavoriteBtn />
              </div>

              <div className="buy-online__painting">
                <img src={secondImg} alt="" />
              </div>

              <div className="buy-online__content">
                <h5 className="buy-online__name">MOVIE TIME</h5>
                <p className="buy-online__description">
                  Original artwork. Mixed media on canvas. 130x100 cm
                </p>
                <p className="buy-online__price">$5,500</p>
              </div>
            </div>

            <div onClick={handleNavigate} className="buy-online__slide">
              <div className="buy-online__sliderUp">
                <FavoriteBtn />
              </div>

              <div className="buy-online__painting">
                <img src={thirdImg} alt="" />
              </div>

              <div className="buy-online__content">
                <h5 className="buy-online__name">MOVIE TIME</h5>
                <p className="buy-online__description">
                  Original artwork. Mixed media on canvas. 130x100 cm
                </p>
                <p className="buy-online__price">$5,500</p>
              </div>
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

export default BuyOnline;
