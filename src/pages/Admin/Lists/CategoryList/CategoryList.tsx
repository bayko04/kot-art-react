import { FC, useState } from "react";
import { useGetCategory } from "./api/useCategoy";
import { useNavigate } from "react-router-dom";
import CreateHeader from "../../ui/CreateHeader/CreateHeader";
import ListTemplate from "../../../../shared/ui/ListTemplate/ListTemplate";

const CategoryList: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const { data, isFetching } = useGetCategory(currentPage, pageSize);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/create-category");
  };

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="category-list">
      <CreateHeader
        title="Categories"
        btnText="Create category"
        handleClick={handleClick}
      />

      <ListTemplate
        handlePageClick={handlePageClick}
        pageSize={pageSize}
        isFetching={isFetching}
        data={data}
        admin
        listType="category"
      />
    </div>
  );
};

export default CategoryList;
