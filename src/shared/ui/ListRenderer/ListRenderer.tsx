import "./ListRenderer.scss";
import cardImg1 from "../../../shared/assets/images/png/slider1/1.png";
import cardImg2 from "../../../shared/assets/images/png/slider1/2.png";
import cardImg3 from "../../../shared/assets/images/png/slider1/3.png";
import cardImg4 from "../../../shared/assets/images/png/slider1/4.png";
import PaintingCard from "../../../features/PaintingCard/PaintingCard";
import CategoriesCard from "../../../features/CategoriesCard/CategoriesCard";
import AuthorCard from "../../../features/AuthorCard/AuthorCard";
import BasicLoader from "../BasicLoader/BasicLoader";
import Pagination from "../../../components/Pagination/Pagination";

const ListRenderer = ({
  children,
  listType,
  admin,
  data,
  isFetching,
  handlePageClick,
  pageSize,
}: {
  children?: any;
  listType?: any;
  admin?: boolean;
  data?: any;
  isFetching?: boolean;
  handlePageClick: (event: any) => void;
  pageSize: number;
}) => {
  return (
    <div className="list-renderer">
      {isFetching ? (
        <div className="list-renderer__loader">
          <BasicLoader />
        </div>
      ) : listType === "category" ? (
        <div className="list-renderer__row">
          {/* <CategoriesCard admin={admin} id={0} /> */}
          {data?.results?.map((item: any) => (
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
          {/* <AuthorCard admin={admin} /> */}
          {data?.results?.map((item: any) => (
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
          {data?.results?.map((item: any) => (
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

      {pageSize < data?.count && (
        <Pagination
          handlePageClick={handlePageClick}
          pageSize={pageSize}
          count={data?.count}
        />
      )}
    </div>
  );
};

export default ListRenderer;
