import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import "./GalleryList.scss";

const GalleryList = () => {
  return (
    <div className="gallery-list">
      <div className="container">
        <ListTemplate title="The Gallery" />
      </div>
    </div>
  );
};

export default GalleryList;
