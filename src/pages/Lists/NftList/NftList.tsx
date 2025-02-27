import { useState } from "react";
import BasicLoader from "../../../shared/ui/BasicLoader/BasicLoader";
import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";

import { useGetPaintings } from "../../Admin/Lists/PaintingsList/api/usePaintings";
import "./NftList.scss";

const NftList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const { data, isFetching } = useGetPaintings({
    page: currentPage,
    pageSize: pageSize,
    categoryTitle: "nft",
  });

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="nft-list">
      <div className="container">
        <div className="nft-list__header">
          <h2 className="nft-list__title">NFT</h2>
        </div>

        <ListTemplate
          data={data}
          isFetching={isFetching}
          handlePageClick={handlePageClick}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default NftList;
