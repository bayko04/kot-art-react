import React, { FC } from "react";
import "./BuyOnlineCard.scss";
import FavoriteBtn from "../../../shared/ui/FavoriteBtn/FavoriteBtn";
import Magnifier from "react-magnifier";

interface IProps {
  handleNavigate: (e: React.MouseEvent<HTMLDivElement>) => void;
  img: string;
}

const BuyOnlineCard: FC<IProps> = ({ handleNavigate, img }) => {
  return (
    <div className="buy-online-card-slide">
      <div className="buy-online-card__header">
        <FavoriteBtn />
      </div>

      <div className="buy-online-card__painting">
        {/* <img src={img} alt="" /> */}
        <Magnifier src={img} width={"100%"} height={"100%"} />
      </div>

      <div onClick={handleNavigate} className="buy-online-card__content">
        <h5 className="buy-online-card__name">MOVIE TIME</h5>
        <p className="buy-online-card__description">
          Original artwork. Mixed media on canvas. 130x100 cm
        </p>
        <p className="buy-online-card__price">$5,500</p>
      </div>
    </div>
  );
};

export default BuyOnlineCard;
