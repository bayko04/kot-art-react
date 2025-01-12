import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import "./AllArtworks.scss";

const AllArtworks = () => {
  return (
    <div className="all-artworks">
      <div className="container">
        <ListTemplate title="Artworks" />
      </div>
    </div>
  );
};

export default AllArtworks;
