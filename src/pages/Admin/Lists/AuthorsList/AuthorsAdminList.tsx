import { FC } from "react";
import CreateHeader from "../../ui/CreateHeader/CreateHeader";
import ListTemplate from "../../../../shared/ui/ListTemplate/ListTemplate";
import { useNavigate } from "react-router-dom";
import "./AuthorsAdminList.scss";

const AuthorsAdminList: FC = () => {
  const navigate = useNavigate();

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

      <ListTemplate listType="author" />
    </div>
  );
};

export default AuthorsAdminList;
