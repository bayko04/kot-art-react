import { FC } from "react";
import CreateHeader from "../../ui/CreateHeader/CreateHeader";
import ListTemplate from "../../../../shared/ui/ListTemplate/ListTemplate";
import { useNavigate } from "react-router-dom";
import "./AuthorsAdminList.scss";
import { useGetAuthors } from "./api/useAuthors";

const AuthorsAdminList: FC = () => {
  const navigate = useNavigate();
  const { data, isFetching } = useGetAuthors();

  const handleClick = () => {
    navigate("/admin/create-artist");
  };

  return (
    <div className="authors-admin-list">
      <CreateHeader
        title="Artists"
        btnText="Create artist"
        handleClick={handleClick}
      />

      <ListTemplate
        isFetching={isFetching}
        admin
        data={data}
        listType="author"
      />
    </div>
  );
};

export default AuthorsAdminList;
