import { useNavigate } from "react-router-dom";
import heartImg from "../../shared/assets/images/svg/header/Vector-1.svg";
import { IPainting } from "../../shared/types/paintingsType";
import "./PaintingCard.scss";
import DeleteBtn from "../../shared/ui/DeleteBtn/DeleteBtn";
import FavoriteBtn from "../../shared/ui/FavoriteBtn/FavoriteBtn";

interface IProps extends IPainting {
  img?: string;
  width?: string;
  deletable?: boolean;
  admin?: boolean;
  isStock?: boolean;
}

const PaintingCard = ({
  image,
  title,
  key,
  price,
  currency,
  description,
  img,
  follow,
  width = "25%",
  admin,
  id,
  isStock,
}: IProps) => {
  const navigate = useNavigate();

  const handleNavigate = (e: any) => {
    e.stopPropagation();

    if (admin) {
      return navigate(`/admin/edit-painting/${id}`);
    }

    navigate(`/painting-details/${id}`);
  };

  return (
    <div onClick={handleNavigate} className="painting-card">
      <div className="painting-card__sliderUp">
        {isStock ? (
          <h3 className="painting-card__inStock">In stock</h3>
        ) : (
          <h3 className="painting-card__availability">ASK FOR AVAILABILITY</h3>
        )}
        {!admin && <FavoriteBtn id={id} />}
      </div>
      <div className="painting-card__painting">
        <img src={image} alt="" />
      </div>
      <div className="painting-card__content">
        <h5 className="painting-card__name">{title || "MOVIE TIME"}</h5>
        <p className="painting-card__description">
          {description || "Original artwork. Mixed media on canvas. 130x100 cm"}
        </p>
        <p className="painting-card__price">{price || "$5,500"}</p>
      </div>

      {/* {true && <DeleteBtn />} */}
    </div>
  );
};

export default PaintingCard;
