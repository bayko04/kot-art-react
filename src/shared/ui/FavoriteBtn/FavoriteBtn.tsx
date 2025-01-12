import { FC, useState } from "react";
import heartImg from "../../../images/svg/header/favoriteUn.svg";
import heartRedImg from "../../../images/svg/header/favorite.svg";
import "./FavoriteBtn.scss";

const FavoriteBtn: FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: any) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };

  return (
    <div onClick={toggleLike} className="favorite-btn">
      {isLiked ? (
        <div className="favorite-btn__liked">
          <img src={heartRedImg} alt="" />
        </div>
      ) : (
        <div className="favorite-btn__unliked">
          <img src={heartImg} alt="" />
        </div>
      )}
    </div>
  );
};

export default FavoriteBtn;
