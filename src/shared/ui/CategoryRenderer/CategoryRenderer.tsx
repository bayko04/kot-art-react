import { useParams } from "react-router-dom";
import ListTemplate from "../ListTemplate/ListTemplate";
import "./CategoryRenderer.scss";

const CategoryRenderer = () => {
  const params = useParams();

  return (
    <div className="category-renderer">
      <div className="container">
        <ListTemplate title="KOTART COLLECTION" />
      </div>
    </div>
  );
};

export default CategoryRenderer;
