import React from "react";
import { Link } from "react-router-dom";
import firstImg from "../../images/png/selectedArt/1.png";
import secondImg from "../../images/png/selectedArt/2.png";
import thirdImg from "../../images/png/selectedArt/3.png";
import fourthImg from "../../images/png/selectedArt/4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SelectedArt = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="selected-art">
      <div className="container">
        <h2 className="selected-art__title">Selected artworks</h2>
        <p className="selected-art__subtitle">
          <Link to="/">All paintings</Link>
        </p>

        <Slider {...settings} className="selected-art__slider">
          <div className="selected-art__slide">
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
          <div className="selected-art__slide">
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
          <div className="selected-art__slide">
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
          <div className="selected-art__slide">
            <div className="selected-art__painting">
              <img src={fourthImg} alt="" />
            </div>
            <div className="selected-art__content">
              <h5 className="selected-art__name">MOVIE TIME</h5>
              <p className="selected-art__description">
                Original artwork. Mixed media on canvas. 130x100 cm
              </p>
              <p className="selected-art__price">$5,500</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SelectedArt;
