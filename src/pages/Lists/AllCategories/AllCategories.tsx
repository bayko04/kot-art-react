import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import "./AllCategories.scss";

const AllCategories = () => {
  return (
    <div className="all-categories">
      <div className="container">
        <ListTemplate title="All categories" listType="category" />
      </div>
    </div>
  );
};

export default AllCategories;
