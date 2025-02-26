import { FC, useState } from "react";
import CreateHeader from "../../ui/CreateHeader/CreateHeader";
import ListTemplate from "../../../../shared/ui/ListTemplate/ListTemplate";
import { useNavigate } from "react-router-dom";
import "./AuthorsAdminList.scss";
import { useGetAuthors } from "./api/useAuthors";

const AuthorsAdminList: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const navigate = useNavigate();
  const { data, isFetching } = useGetAuthors(currentPage, pageSize);

  const handleClick = () => {
    navigate("/admin/create-artist");
  };

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="authors-admin-list">
      <CreateHeader
        title="Artists"
        btnText="Create artist"
        handleClick={handleClick}
      />

      <ListTemplate
        handlePageClick={handlePageClick}
        pageSize={pageSize}
        isFetching={isFetching}
        admin
        data={data}
        listType="author"
      />
    </div>
  );
};

export default AuthorsAdminList;
