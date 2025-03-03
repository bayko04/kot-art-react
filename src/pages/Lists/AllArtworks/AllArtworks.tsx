import { useState } from "react";
import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useGetPaintings } from "../../Admin/Lists/PaintingsList/api/usePaintings";
import "./AllArtworks.scss";

const AllArtworks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const { data, isFetching } = useGetPaintings({
    page: currentPage,
    pageSize: pageSize,
  });

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="all-artworks">
      <div className="container">
        <ListTemplate
          handlePageClick={handlePageClick}
          data={data}
          isFetching={isFetching}
          pageSize={pageSize}
          title="Artworks"
        />
      </div>
    </div>
  );
};

export default AllArtworks;
