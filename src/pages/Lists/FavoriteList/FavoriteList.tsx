import { useState } from "react";
import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useGetFavorites } from "./api/useGetFavorites";
import "./FavoriteList.scss";

const FavoriteList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const { data } = useGetFavorites(currentPage, pageSize);

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  console.log(data);

  return (
    <div className="favorite-list">
      <div className="container">
        {/* <ListTemplate
          handlePageClick={handlePageClick}
          pageSize={pageSize}
          data={data}
          title="Favorites"
        /> */}
      </div>
    </div>
  );
};

export default FavoriteList;
