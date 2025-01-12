import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import "./AuthorsList.scss";

const AuthorsList = () => {
  return (
    <div className="authors-list">
      <div className="container">
        <ListTemplate listType="author" title="Artists" />
      </div>
    </div>
  );
};

export default AuthorsList;
