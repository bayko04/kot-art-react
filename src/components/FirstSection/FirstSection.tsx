import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import timerImg from "../../images/png/timer.png";

const FirstSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i: any) {
      return <div className="custom-dot"></div>;
    },
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="first-section">
      <Slider {...settings}>
        <div className="first-section__backgrounds_1">
          <div className="container">
            <div className="first-section__row">
              <div className="first-section__left">
                <h1 className="first-section__title">
                  Browse new <br /> collection
                </h1>
                <p className="first-section__text">
                  Available until 3:00 PM, May 31, 2024.
                </p>
                <div className="first-section__btn">
                  <button>see this item</button>
                </div>
              </div>
              <div className="first-section__rigth">
                <div className="first-section__timer">
                  <img src={timerImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="first-section__backgrounds_1">
          <div className="container">
            <div className="first-section__row">
              <div className="first-section__left">
                <h1 className="first-section__title">Browse new collection</h1>
                <p className="first-section__text">
                  Available until 3:00 PM, May 31, 2024.
                </p>
                <div className="first-section__btn">
                  <button>see this item</button>
                </div>
              </div>
              <div className="first-section__rigth">
                <div className="first-section__timer">
                  <img src={timerImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FirstSection;
