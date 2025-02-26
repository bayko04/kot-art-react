import { useParams } from "react-router-dom";
import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useCategoryPaints } from "./api/useCategoryPaints";
import "./CategoryPaintings.scss";
import { useState } from "react";

const CategoryPaintings = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const { data } = useCategoryPaints(currentPage, pageSize, params.slug || "");

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="category-paints">
      <div className="container">
        <ListTemplate
          handlePageClick={handlePageClick}
          pageSize={pageSize}
          data={data}
          title={params.slug}
        />
      </div>
    </div>
  );
};

export default CategoryPaintings;
