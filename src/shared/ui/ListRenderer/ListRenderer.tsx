import "./ListRenderer.scss";
import cardImg1 from "../../../images/png/slider1/1.png";
import cardImg2 from "../../../images/png/slider1/2.png";
import cardImg3 from "../../../images/png/slider1/3.png";
import cardImg4 from "../../../images/png/slider1/4.png";
import PaintingCard from "../../../components/PaintingCard/PaintingCard";
import CategoriesCard from "../../../features/CategoriesCard/CategoriesCard";
import AuthorCard from "../../../features/AuthorCard/AuthorCard";
import BasicLoader from "../BasicLoader/BasicLoader";

const ListRenderer = ({
  children,
  listType,
  admin,
  data,
  isFetching,
}: {
  children?: any;
  listType?: any;
  admin?: boolean;
  data?: any;
  isFetching?: boolean;
}) => {
  return (
    <div className="list-renderer">
      {isFetching ? (
        <div className="list-renderer__loader">
          <BasicLoader />
        </div>
      ) : listType === "category" ? (
        <div className="list-renderer__row">
          <CategoriesCard admin={admin} id={0} />
          {data.map((item: any) => (
            <CategoriesCard
              image={item.image}
              title={item.title}
              admin={admin}
              id={item.id}
            />
          ))}
        </div>
      ) : listType === "author" ? (
        <div className="list-renderer__row">
          <AuthorCard admin={admin} />
          {data.map((item: any) => (
            <AuthorCard
              name={item.name}
              avatar={item.avatar}
              admin={admin}
              id={item.id}
            />
          ))}
        </div>
      ) : (
        <div className="list-renderer__row">
          <PaintingCard admin={admin} image={cardImg1} />
          <PaintingCard admin={admin} image={cardImg2} />
          <PaintingCard admin={admin} image={cardImg3} />
          <PaintingCard admin={admin} image={cardImg4} />
          <PaintingCard admin={admin} image={cardImg1} />
          <PaintingCard admin={admin} image={cardImg2} />
          <PaintingCard admin={admin} image={cardImg3} />
          <PaintingCard admin={admin} image={cardImg4} />
          <PaintingCard admin={admin} image={cardImg1} />
          <PaintingCard admin={admin} image={cardImg2} />
          <PaintingCard admin={admin} image={cardImg3} />
          <PaintingCard admin={admin} image={cardImg4} />
          <PaintingCard admin={admin} image={cardImg1} />
          <PaintingCard admin={admin} image={cardImg2} />
          <PaintingCard admin={admin} image={cardImg3} />
          <PaintingCard admin={admin} image={cardImg4} />
          {data.map((item: any) => (
            <PaintingCard
              title={item.title}
              description={item.description}
              price={item.price}
              admin={admin}
              image={item.image}
              id={item.id}
              isStock={item.is_stock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListRenderer;
