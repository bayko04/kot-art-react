import ListRenderer from "../ListRenderer/ListRenderer";
import "./ListTemplate.scss";

interface IProps {
  title?: string;
  img?: string;
  data?: any[];
  listType?: string;
}

const ListTemplate = ({ title, img, data, listType }: IProps) => {
  return (
    <div className="list-template">
      <div className="list-template__intro-img"></div>

      <div className="list-template__content">
        <h2 className="list-template__title">{title}</h2>

        <ListRenderer listType={listType} />
      </div>
    </div>
  );
};

export default ListTemplate;
