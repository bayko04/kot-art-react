import { useEffect, useState } from "react";
import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useGetFavorites } from "./api/useGetFavorites";
import "./FavoriteList.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavoriteList = () => {
  const pageSize = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetFavorites({ page: currentPage, pageSize: pageSize });
  const { isAuth } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth/sign-in");
    }
  }, [isAuth]);

  console.log(isAuth);

  return (
    <div className="favorite-list">
      <div className="container">
        <ListTemplate
          handlePageClick={handlePageClick}
          pageSize={pageSize}
          data={data}
          title="Favorites"
        />
      </div>
    </div>
  );
};

export default FavoriteList;
