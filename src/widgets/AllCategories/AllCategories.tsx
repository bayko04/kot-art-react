import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import firstImg from "../../shared/assets/images/png/slider1/1.png";
import secondImg from "../../shared/assets/images/png/slider1/2.png";
import thirdImg from "../../shared/assets/images/png/slider1/3.png";
import fourthImg from "../../shared/assets/images/png/slider1/4.png";
import fivethImg from "../../shared/assets/images/png/slider1/5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AllCategories.scss";
import CategoriesCard from "../../features/CategoriesCard/CategoriesCard";
import { useGetCategory } from "../../pages/Admin/Lists/CategoryList/api/useCategoy";

const AllCategories = () => {
  const navigate = useNavigate();
  const { data } = useGetCategory(1, 30);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true, // Позволяет тянуть на любое расстояние
    variableWidth: false, // Можно попробовать true, но тогда нужно убедиться, что ширина у элементов корректная

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
        <Link to="/all-artworks">All paintings</Link>
      </p>

      <div className="slider-container">
        <Slider {...settings} className="all-categories__slider">
          <CategoriesCard image={firstImg} />
          <CategoriesCard image={secondImg} />
          <CategoriesCard image={thirdImg} />
          <CategoriesCard image={fourthImg} />
          <CategoriesCard image={fivethImg} />
          <CategoriesCard image={firstImg} />
          <CategoriesCard image={secondImg} />
          <CategoriesCard image={thirdImg} />
          <CategoriesCard image={fourthImg} />
          <CategoriesCard image={fivethImg} />

          {data?.results?.map((item: any) => (
            <CategoriesCard
              key={item.id}
              image={item.image}
              title={item.title}
              id={item.id}
            />
          ))}
        </Slider>
        <div className="all-categories__btn">
          <button onClick={() => navigate("/gallery")}>Shop for Art</button>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
