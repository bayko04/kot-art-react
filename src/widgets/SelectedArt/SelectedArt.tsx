import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import firstImg from "../../shared/assets/images/png/selectedArt/1.png";
import secondImg from "../../shared/assets/images/png/selectedArt/2.png";
import thirdImg from "../../shared/assets/images/png/selectedArt/3.png";
import fourthImg from "../../shared/assets/images/png/selectedArt/4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heartImg from "../../shared/assets/images/svg/header/favoriteUn.svg";
import FavoriteBtn from "../../shared/ui/FavoriteBtn/FavoriteBtn";
import "./SelectedArt.scss";
import SelectedArtCard from "./SelectedArtCard/SelectedArtCard";
import { useGetFavorites } from "../../pages/Lists/FavoriteList/api/useGetFavorites";

const SelectedArt = () => {
  const slider = useRef<any>(null);
  const { favoritesList } = useGetFavorites();
  const navigate = useNavigate();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "20%", // Показывает часть следующего и предыдущего слайда по бокам
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: false,
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
        <Link to="/all-artworks">All paintings</Link>
      </p>

      <div className="slider-container">
        <Slider ref={slider} {...settings} className="selected-art__slider">
          <SelectedArtCard
            isStock
            handleNavigate={handleNavigate}
            img={firstImg}
          />
          <SelectedArtCard
            isStock
            handleNavigate={handleNavigate}
            img={secondImg}
          />
          <SelectedArtCard
            isStock
            handleNavigate={handleNavigate}
            img={thirdImg}
          />
          <SelectedArtCard
            isAsk
            handleNavigate={handleNavigate}
            img={fourthImg}
          />
          <SelectedArtCard handleNavigate={handleNavigate} img={firstImg} />
          <SelectedArtCard
            isAsk
            handleNavigate={handleNavigate}
            img={secondImg}
          />
          <SelectedArtCard
            isStock
            handleNavigate={handleNavigate}
            img={thirdImg}
          />
          <SelectedArtCard
            isAsk
            handleNavigate={handleNavigate}
            img={fourthImg}
          />
        </Slider>

        {/* <button
            className="custom-prev-arrow"
            onClick={() => slider?.current?.slickPrev()}
          >
            <img src="../../shared/assets/images/svg/arrow/Left.svg" alt="Previous" />
          </button>
          <button
            className="custom-next-arrow"
            onClick={() => slider?.current?.slickNext()}
          >
            <img src="../../shared/assets/images/svg/arrow/Right.svg" alt="Next" />
          </button> */}
      </div>
    </div>
  );
};

export default SelectedArt;
