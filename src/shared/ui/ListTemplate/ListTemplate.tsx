import ListRenderer from "../ListRenderer/ListRenderer";
import "./ListTemplate.scss";

interface IProps {
  title?: string;
  img?: string;
  data?: any[];
  listType?: string;
  deletable?: boolean;
  admin?: boolean;
  isFetching?: boolean;
  handlePageClick: (event: any) => void;
  pageSize: number;
}

const ListTemplate = ({
  title,
  data,
  listType,
  admin,
  isFetching,
  handlePageClick,
  pageSize,
}: IProps) => {
  return (
    <div className="list-template">
      <div className="list-template__intro-img"></div>

      <div className="list-template__content">
        <h2 className="list-template__title">{title}</h2>

        <ListRenderer
          isFetching={isFetching}
          data={data}
          admin={admin}
          listType={listType}
          handlePageClick={handlePageClick}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default ListTemplate;
