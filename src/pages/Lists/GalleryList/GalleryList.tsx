import CategoriesCard from "../../../features/CategoriesCard/CategoriesCard";
import BasicLoader from "../../../shared/ui/BasicLoader/BasicLoader";
import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useGetCategory } from "../../Admin/Lists/CategoryList/api/useCategoy";
import "./GalleryList.scss";

const GalleryList = () => {
  const { data, isFetching } = useGetCategory();

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
            {data.map((item: any) => (
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
