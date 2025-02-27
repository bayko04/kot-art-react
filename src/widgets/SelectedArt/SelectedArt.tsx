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
  const { data: favoritesList } = useGetFavorites(1, 30);

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

  return (
    <div className="selected-art">
      <h2 className="selected-art__title">Selected artworks</h2>
      <p className="selected-art__subtitle">
        <Link to="/all-artworks">All paintings</Link>
      </p>

      <div className="slider-container">
        <Slider ref={slider} {...settings} className="selected-art__slider">
          <SelectedArtCard isStock img={firstImg} />
          <SelectedArtCard isStock img={secondImg} />
          <SelectedArtCard isStock img={thirdImg} />
          <SelectedArtCard isAsk img={fourthImg} />
          <SelectedArtCard img={firstImg} />
          <SelectedArtCard isAsk img={secondImg} />
          <SelectedArtCard isStock img={thirdImg} />
          <SelectedArtCard isAsk img={fourthImg} />

          {favoritesList?.results?.map((item: any) => (
            <SelectedArtCard
              id={item.id}
              isStock={item.is_stock}
              price={item.price}
              description={item.description}
              title={item.title}
              img={item.image}
            />
          ))}
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
