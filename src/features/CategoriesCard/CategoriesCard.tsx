import Magnifier from "react-magnifier";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import firstImg from "../../shared/assets/images/png/slider1/1.png";
import "./CategoriesCard.scss";

interface IProps {
  deletable?: boolean;
  admin?: boolean;
  title?: string;
  image?: string;
  id?: number;
}

const CategoriesCard: FC<IProps> = ({ admin, title, image, id }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (admin) {
      return navigate(`/admin/edit-category/${id}`);
    }
    navigate(`/category/paintings/${title}`);
  };

  return (
    <div className="categories-card">
      <div className="categories-card__slide">
        <div className="categories-card__painting">
          {/* <img src={image || firstImg} alt="" /> */}
          <Magnifier src={image || firstImg} width={"100%"} height={"100%"} />
        </div>
        <p onClick={handleNavigate} className="categories-card__name">
          {title || "KOTART COLLECTION"}
        </p>
      </div>
    </div>
  );
};

export default CategoriesCard;
