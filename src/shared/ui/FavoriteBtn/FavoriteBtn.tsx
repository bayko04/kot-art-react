import { useState } from "react";
import heartImg from "../../../images/svg/header/favoriteUn.svg";
import heartRedImg from "../../../images/svg/header/favorite.svg";
import "./FavoriteBtn.scss";
import { useAddFavorite, useDeleteFavorite } from "./api/useFavorite";

const FavoriteBtn = ({ id }: { id?: number }) => {
  const { mutate: addFavoriteFn } = useAddFavorite();
  const { mutate: deleteFavoriteFn } = useDeleteFavorite();
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: any) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);

    if (isLiked) {
      deleteFavoriteFn(id);
    } else {
      addFavoriteFn(id);
    }
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
