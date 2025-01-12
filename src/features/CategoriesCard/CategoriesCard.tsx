import "./CategoriesCard.scss";
import firstImg from "../../images/png/slider1/1.png";

const CategoriesCard = () => {
  return (
    <div className="categories-card">
      <div className="categories-card__slide">
        <div className="categories-card__painting">
          <img src={firstImg} alt="" />
        </div>
        <p className="categories-card__name">KOTART COLLECTION</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
