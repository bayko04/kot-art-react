import ListTemplate from "../../../shared/ui/ListTemplate/ListTemplate";
import { useGetAuthors } from "../../Admin/CreateForms/CreatePainting/api/useAuthors";
import "./AuthorsList.scss";

const AuthorsList = () => {
  const { data, isFetching } = useGetAuthors();

  return (
    <div className="authors-list">
      <div className="container">
        <ListTemplate
          isFetching={isFetching}
          data={data}
          listType="author"
          title="Artists"
        />
      </div>
    </div>
  );
};

export default AuthorsList;
