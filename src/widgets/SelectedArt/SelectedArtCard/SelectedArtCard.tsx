import React, { FC } from "react";
import FavoriteBtn from "../../../shared/ui/FavoriteBtn/FavoriteBtn";
import "./SelectedArtCard.scss";
import Magnifier from "react-magnifier";
import { useNavigate } from "react-router-dom";

interface IProps {
  img: string;
  isStock?: boolean;
  isAsk?: boolean;
  price?: string;
  description?: string;
  title?: string;
  id?: number;
}

const SelectedArtCard: FC<IProps> = ({
  img,
  isStock,
  title,
  description,
  price,
  id,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (e: any) => {
    e.stopPropagation();

    navigate(`/painting-details/${id}`);
  };

  return (
    <div className="selected-art-card">
      <div className="selected-art-card__sliderUp">
        {isStock ? (
          <h3 className="selected-art-card__inStock">In stock</h3>
        ) : (
          <h3 className="selected-art-card__availability">
            ASK FOR AVAILABILITY
          </h3>
        )}

        <FavoriteBtn />
      </div>
      <div className="selected-art-card__painting">
        {/* <img src={img} alt="" /> */}
        <Magnifier src={img} width={"100%"} height={"100%"} />
      </div>
      <div onClick={handleNavigate} className="selected-art-card__content">
        <h5 className="selected-art-card__name">{title || "MOVIE TIME"}</h5>
        <p className="selected-art-card__description">
          {description || "Original artwork. Mixed media on canvas."}
        </p>
        <p className="selected-art-card__price">${price || "5,500"}</p>
      </div>
    </div>
  );
};

export default SelectedArtCard;
