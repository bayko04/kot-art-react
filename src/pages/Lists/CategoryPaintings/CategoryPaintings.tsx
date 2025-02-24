import { useParams } from "react-router-dom";
import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useCategoryPaints } from "./api/useCategoryPaints";
import "./CategoryPaintings.scss";

const CategoryPaintings = () => {
  const params = useParams();
  const { data } = useCategoryPaints(params.slug || "");

  console.log(data);

  return (
    <div className="category-paints">
      <div className="container">
        <ListTemplate data={data} title={params.slug} />
      </div>
    </div>
  );
};

export default CategoryPaintings;
