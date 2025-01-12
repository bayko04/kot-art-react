import { FC } from "react";
import { useGetCategory } from "./api/useCategoy";

import { useNavigate } from "react-router-dom";
import CreateHeader from "../../ui/CreateHeader/CreateHeader";
import ListTemplate from "../../../../shared/ui/ListTemplate/ListTemplate";

const CategoryList: FC = () => {
  const { data } = useGetCategory();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/create-category");
  };

  return (
    <div className="category-list">
      <CreateHeader
        title="Categories"
        btnText="Create category"
        handleClick={handleClick}
      />

      {/* <div className="category-list__cards">
        {data?.map((item: any) => (
          <CategoryCard title={item.title} img={item.image} />
        ))}
      </div> */}
      <ListTemplate listType="category" />
    </div>
  );
};

export default CategoryList;
