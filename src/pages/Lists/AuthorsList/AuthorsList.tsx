import { useState } from "react";
import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useGetAuthors } from "../../Admin/CreateForms/CreatePainting/api/useAuthors";
import "./AuthorsList.scss";

const AuthorsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const { data, isFetching } = useGetAuthors(currentPage, pageSize);

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="authors-list">
      <div className="container">
        <ListTemplate
          isFetching={isFetching}
          data={data}
          listType="author"
          title="Artists"
          handlePageClick={handlePageClick}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default AuthorsList;
