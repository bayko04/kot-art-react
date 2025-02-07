import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useGetPaintings } from "../../Admin/Lists/PaintingsList/api/usePaintings";
import "./AllArtworks.scss";

const AllArtworks = () => {
  const { data, isFetching } = useGetPaintings();

  return (
    <div className="all-artworks">
      <div className="container">
        <ListTemplate data={data} isFetching={isFetching} title="Artworks" />
      </div>
    </div>
  );
};

export default AllArtworks;
