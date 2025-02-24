import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import LineSlide from "./LineSlide/LineSlide";
import leftArrow from "../../shared/assets/images/svg/arrow/leftPink.svg";
import rightArrow from "../../shared/assets/images/svg/arrow/RightBlue.svg";
import { useGetPaintings } from "../../pages/Admin/Lists/PaintingsList/api/usePaintings";
import rondomizer from "../../shared/utils/randomizer";
import "./LineSlider.scss";

const LineSlider = ({
  title,
  rec,
  otherData,
}: {
  title: string;
  rec?: boolean;
  otherData?: any;
}) => {
  const slider = useRef<any>(null);
  const { data, isSuccess } = useGetPaintings();
  const [randomData, setRandomData] = useState<any>([]);

  useEffect(() => {
    if (data.length && randomData.length <= 15) {
      for (let i = 0; i < 15; i++) {
        const object = rondomizer(data);
        setRandomData((prev: any) => [...prev, object]);
      }
    }
  }, [data]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: false,

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
    <div className="line-slider">
      <h2 className="line-slider__title">{title}</h2>

      <div className="line-slider__container">
        <Slider ref={slider} {...settings} className="line-slider__slider">
          {rec
            ? randomData?.map((item: any) => (
                <div key={item?.id}>
                  <LineSlide title={item.title} img={item.image} />
                </div>
              ))
            : [...otherData, ...otherData, ...otherData]?.map((item: any) => (
                <div key={item?.id}>
                  <LineSlide title={item?.title} img={item?.image} />
                </div>
              ))}
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
          <LineSlide />
        </Slider>

        <div className="line-slider__btns">
          <button
            className="custom-prev-line-slider"
            onClick={() => slider?.current?.slickPrev()}
          ></button>
          <button
            className="custom-next-line-slider"
            onClick={() => slider?.current?.slickNext()}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default LineSlider;
