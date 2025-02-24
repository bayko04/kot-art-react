import React, { FC } from "react";
import FavoriteBtn from "../../../shared/ui/FavoriteBtn/FavoriteBtn";
import "./SelectedArtCard.scss";

interface IProps {
  handleNavigate: (e: React.MouseEvent<HTMLDivElement>) => void;
  img: string;
  isStock?: boolean;
  isAsk?: boolean;
}

const SelectedArtCard: FC<IProps> = ({
  handleNavigate,
  img,
  isStock,
  isAsk,
}) => {
  return (
    <div onClick={handleNavigate} className="selected-art-card">
      <div className="selected-art-card__sliderUp">
        {isStock && <h3 className="selected-art-card__inStock">In stock</h3>}

        {isAsk && (
          <h3 className="selected-art-card__availability">
            ASK FOR AVAILABILITY
          </h3>
        )}
        <FavoriteBtn />
      </div>
      <div className="selected-art-card__painting">
        <img src={img} alt="" />
      </div>
      <div className="selected-art-card__content">
        <h5 className="selected-art-card__name">MOVIE TIME cdfdsfdfd</h5>
        <p className="selected-art-card__description">
          Original artwork. Mixed media on canvas. 130x100 cm
        </p>
        <p className="selected-art-card__price">$5,500</p>
      </div>
    </div>
  );
};

export default SelectedArtCard;
