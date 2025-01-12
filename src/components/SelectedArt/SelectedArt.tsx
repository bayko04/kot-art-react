import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import firstImg from "../../images/png/selectedArt/1.png";
import secondImg from "../../images/png/selectedArt/2.png";
import thirdImg from "../../images/png/selectedArt/3.png";
import fourthImg from "../../images/png/selectedArt/4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heartImg from "../../images/svg/header/favoriteUn.svg";
import FavoriteBtn from "../../shared/ui/FavoriteBtn/FavoriteBtn";

const SelectedArt = () => {
  const slider = useRef<any>(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "20%", // Показывает часть следующего и предыдущего слайда по бокам
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
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNavigate = (e: any) => {
    e.stopPropagation();

    navigate("/painting-details");
  };

  return (
    <div className="selected-art">
      <h2 className="selected-art__title">Selected artworks</h2>
      <p className="selected-art__subtitle">
        <Link to="/all-paintings">All paintings</Link>
      </p>

      <div className="slider-container">
        <Slider ref={slider} {...settings} className="selected-art__slider">
          <div onClick={handleNavigate} className="selected-art__slide">
            <div className="selected-art__sliderUp">
              {/* <h3 className="selected-art__inStock">In stock</h3> */}
              <h3 className="selected-art__availability">
                ASK FOR AVAILABILITY
              </h3>
              <FavoriteBtn />
            </div>
            <div className="selected-art__painting">
              <img src={firstImg} alt="" />
            </div>
            <div className="selected-art__content">
              <h5 className="selected-art__name">MOVIE TIME</h5>
              <p className="selected-art__description">
                Original artwork. Mixed media on canvas. 130x100 cm
              </p>
              <p className="selected-art__price">$5,500</p>
            </div>
          </div>
          <div onClick={handleNavigate} className="selected-art__slide">
            <div className="selected-art__sliderUp">
              <h3 className="selected-art__inStock">In stock</h3>
              {/* <h3 className="selected-art__availability">
                ASK FOR AVAILABILITY
              </h3> */}
              <FavoriteBtn />
            </div>
            <div className="selected-art__painting">
              <img src={secondImg} alt="" />
            </div>
            <div className="selected-art__content">
              <h5 className="selected-art__name">MOVIE TIME</h5>
              <p className="selected-art__description">
                Original artwork. Mixed media on canvas. 130x100 cm
              </p>
              <p className="selected-art__price">$5,500</p>
            </div>
          </div>
          <div onClick={handleNavigate} className="selected-art__slide">
            <div className="selected-art__sliderUp">
              {/* <h3 className="selected-art__inStock">In stock</h3> */}
              <h3 className="selected-art__availability">
                ASK FOR AVAILABILITY
              </h3>
              <FavoriteBtn />
            </div>
            <div className="selected-art__painting">
              <img src={thirdImg} alt="" />
            </div>
            <div className="selected-art__content">
              <h5 className="selected-art__name">MOVIE TIME</h5>
              <p className="selected-art__description">
                Original artwork. Mixed media on canvas. 130x100 cm
              </p>
              <p className="selected-art__price">$5,500</p>
            </div>
          </div>
          <div onClick={handleNavigate} className="selected-art__slide">
            <div className="selected-art__sliderUp">
              <h3 className="selected-art__inStock">In stock</h3>
              {/* <h3 className="selected-art__availability">
                ASK FOR AVAILABILITY
              </h3> */}
              <FavoriteBtn />
            </div>
            <div className="selected-art__painting">
              <img src={fourthImg} alt="" />
            </div>
            <div onClick={handleNavigate} className="selected-art__content">
              <h5 className="selected-art__name">MOVIE TIME</h5>
              <p className="selected-art__description">
                Original artwork. Mixed media on canvas. 130x100 cm
              </p>
              <p className="selected-art__price">$5,500</p>
            </div>
          </div>
        </Slider>

        {/* <button
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
          </button> */}
      </div>
    </div>
  );
};

export default SelectedArt;
