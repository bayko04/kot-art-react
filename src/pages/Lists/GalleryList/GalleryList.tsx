import CategoriesCard from "../../../features/CategoriesCard/CategoriesCard";
import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import "./GalleryList.scss";

const GalleryList = () => {
  return (
    <div className="gallery-list">
      <div className="container">
        <div className="gallery-list__header">
          <h2 className="list-template__title">The Gallery</h2>
        </div>
        {/* <ListTemplate listType="category" title="The Gallery" /> */}
        <div className="gallery-list__row">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      </div>
    </div>
  );
};

export default GalleryList;
