import { useNavigate } from "react-router-dom";
import someImg from "../../images/png/slider1/3.png";
import "./CategoryCard.scss";

const CategoryCard = ({ title, img }: { title: string; img: string }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/category/KOTART COLLECTION")}
      className="category-card"
    >
      <div className="category-card__slide">
        <div className="category-card__painting">
          <img src={someImg} alt="" />
        </div>
        <p className="category-card__name">KOTART COLLECTION</p>
      </div>
    </div>
  );
};

export default CategoryCard;
