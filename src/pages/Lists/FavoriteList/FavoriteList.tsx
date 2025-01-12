import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import "./FavoriteList.scss";

const FavoriteList = () => {
  return (
    <div className="favorite-list">
      <div className="container">
        <ListTemplate title="Favorites" />
      </div>
    </div>
  );
};

export default FavoriteList;
