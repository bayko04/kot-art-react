import { useEffect, useState } from "react";
import heartImg from "../../../shared/assets/images/svg/header/favoriteUn.svg";
import heartRedImg from "../../../shared/assets/images/svg/header/favorite.svg";
import "./FavoriteBtn.scss";
import { useAddFavorite, useDeleteFavorite } from "./api/useFavorite";
import { useGetFavorites } from "../../../pages/Lists/FavoriteList/api/useGetFavorites";

const FavoriteBtn = ({ id }: { id?: number }) => {
  const { mutate: addFavoriteFn } = useAddFavorite();
  const { mutate: deleteFavoriteFn } = useDeleteFavorite();
  const { data, isFetched } = useGetFavorites();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const followidList =
      data?.results?.filter((item: any) => item.id === id) || [];
    setIsLiked(followidList[0]?.id || false);
  }, [isFetched]);

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
