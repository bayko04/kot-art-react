import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useGetFavorites } from "./api/useGetFavorites";
import "./FavoriteList.scss";

const FavoriteList = () => {
  const { data } = useGetFavorites();

  return (
    <div className="favorite-list">
      <div className="container">
        <ListTemplate data={data} title="Favorites" />
      </div>
    </div>
  );
};

export default FavoriteList;
