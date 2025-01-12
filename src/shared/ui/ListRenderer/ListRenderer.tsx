import "./ListRenderer.scss";
import cardImg1 from "../../../images/png/slider1/1.png";
import cardImg2 from "../../../images/png/slider1/2.png";
import cardImg3 from "../../../images/png/slider1/3.png";
import cardImg4 from "../../../images/png/slider1/4.png";
import PaintingCard from "../../../components/PaintingCard/PaintingCard";
import CategoriesCard from "../../../features/CategoriesCard/CategoriesCard";
import AuthorCard from "../../../features/AuthorCard/AuthorCard";

const ListRenderer = ({
  children,
  listType,
}: {
  children?: any;
  listType?: any;
}) => {
  return (
    <div className="list-renderer">
      {listType === "category" ? (
        <div className="list-renderer__row">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      ) : listType === "author" ? (
        <div className="list-renderer__row">
          <AuthorCard />
        </div>
      ) : (
        <div className="list-renderer__row">
          <PaintingCard image={cardImg1} />
          <PaintingCard image={cardImg2} />
          <PaintingCard image={cardImg3} />
          <PaintingCard image={cardImg4} />
          <PaintingCard image={cardImg1} />
          <PaintingCard image={cardImg2} />
          <PaintingCard image={cardImg3} />
          <PaintingCard image={cardImg4} />
          <PaintingCard image={cardImg1} />
          <PaintingCard image={cardImg2} />
          <PaintingCard image={cardImg3} />
          <PaintingCard image={cardImg4} />
          <PaintingCard image={cardImg1} />
          <PaintingCard image={cardImg2} />
          <PaintingCard image={cardImg3} />
          <PaintingCard image={cardImg4} />
        </div>
      )}
    </div>
  );
};

export default ListRenderer;
