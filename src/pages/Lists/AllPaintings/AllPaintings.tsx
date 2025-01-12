import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import "./AllPaintings.scss";

const AllPaintings = () => {
  return (
    <div className="all-paintings">
      <div className="container">
        <ListTemplate title="All paintings" />
      </div>
    </div>
  );
};

export default AllPaintings;
