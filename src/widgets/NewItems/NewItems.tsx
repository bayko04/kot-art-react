import { Link, useNavigate } from "react-router-dom";
import firstImg from "../../shared/assets/images/png/newItems/1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import sl1 from "../../shared/assets/images/content/sl1.jpg";
import sl2 from "../../shared/assets/images/content/sl2.jpg";
import "./NewItems.scss";

const NewItems = () => {
  const slider = useRef<any>(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "20%", // Показывает часть следующего и предыдущего слайда по бокам
    slidesToScroll: 1,
    customPaging: function (i: any) {
      return <div className="custom-dot"></div>;
    },
    dotsClass: "slick-dots custom-dots",
  };

  const handleNavigate = (e: any) => {
    e.stopPropagation();

    navigate("/painting-details");
  };

  return (
    <div className="new-items">
      <div className="new-items__header">
        <h2>Popular art</h2>
        <p>
          <Link to="/all-artworks">All popular paintings</Link>
        </p>
      </div>

      <div className="slider-container">
        <Slider ref={slider} {...settings} className="new-items__slider">
          <div className="new-items__slide">
            <div className="new-items__painting">
              <img src={sl1} alt="" />
            </div>
            <div className="new-items__content">
              <h3 className="new-items__title">“No money No fanny”</h3>
              <p className="new-items__year">2019</p>
              <p className="new-items__author">Roman Kozhokin</p>
              <ul className="new-items__styles">
                <li>Wood art,</li>
                <li>acrilic,</li>
                <li>sprays</li>
              </ul>
            </div>
          </div>
          <div className="new-items__slide">
            <div className="new-items__painting">
              <img src={firstImg} alt="" />
            </div>

            <div className="new-items__content">
              <h3 className="new-items__title">“No money No fanny”</h3>
              <p className="new-items__year">2019</p>
              <p className="new-items__author">Roman Kozhokin</p>
              <ul className="new-items__styles">
                <li>Wood art,</li>
                <li>acrilic,</li>
                <li>sprays</li>
              </ul>
            </div>
          </div>
          <div className="new-items__slide">
            <div className="new-items__painting">
              <img src={firstImg} alt="" />
            </div>

            <div className="new-items__content">
              <h3 className="new-items__title">“No money No fanny”</h3>
              <p className="new-items__year">2019</p>
              <p className="new-items__author">Roman Kozhokin</p>
              <ul className="new-items__styles">
                <li>Wood art,</li>
                <li>acrilic,</li>
                <li>sprays</li>
              </ul>
            </div>
          </div>
          <div className="new-items__slide">
            <div className="new-items__painting">
              <img src={sl2} alt="" />
            </div>

            <div className="new-items__content">
              <h3 className="new-items__title">“No money No fanny”</h3>
              <p className="new-items__year">2019</p>
              <p className="new-items__author">Roman Kozhokin</p>
              <ul className="new-items__styles">
                <li>Wood art,</li>
                <li>acrilic,</li>
                <li>sprays</li>
              </ul>
            </div>
          </div>
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

export default NewItems;
