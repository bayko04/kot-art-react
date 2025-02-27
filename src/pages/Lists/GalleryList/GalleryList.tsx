import CategoriesCard from "../../../features/CategoriesCard/CategoriesCard";
import BasicLoader from "../../../shared/ui/BasicLoader/BasicLoader";
import { useGetCategory } from "../../Admin/Lists/CategoryList/api/useCategoy";
import "./GalleryList.scss";
import categoryImg from "../../../shared/assets/images/content/sl2.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const GalleryList = () => {
  const { data, isFetching, isFetched } = useGetCategory(1, 100);
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isFetched) {
      const filterData = data?.results?.filter((item: any) => {
        return item.title.split("-")[0].toLowerCase() !== "double";
      });

      setFiltered(filterData);
    }
  }, [isFetched]);

  return (
    <div className="gallery-list">
      <div className="container">
        <div className="gallery-list__header">
          <h2 className="list-template__title">The Gallery</h2>
        </div>
        {isFetching ? (
          <div>
            <BasicLoader />
          </div>
        ) : (
          <div className="gallery-list__row">
            <div onClick={() => navigate("/double-category")}>
              <CategoriesCard image={categoryImg} />
            </div>
            {filtered?.length > 0 && filtered?.map((item: any) => (
              <CategoriesCard
                image={item.image}
                title={item.title}
                id={item.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryList;
