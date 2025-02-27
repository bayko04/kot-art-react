import { useEffect, useState } from "react";
import "./DoubleCategory.scss";
import { useGetCategory } from "../../Admin/Lists/CategoryList/api/useCategoy";
import BasicLoader from "../../../shared/ui/BasicLoader/BasicLoader";
import CategoriesCard from "../../../features/CategoriesCard/CategoriesCard";
import categoryImg from "../../../shared/assets/images/content/sl2.jpg";

const DoubleCategory = () => {
  const { data, isFetched, isFetching } = useGetCategory(1, 100);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (isFetched) {
      const filterData = data?.results?.filter((item: any) => {
        return item.title.split("-")[0].toLowerCase() === "double";
      });

      setFiltered(filterData);
    }
  }, [isFetched]);

  return (
    <div className="double-category">
      <div className="container">
        <div className="double-category__header">
          <h2 className="list-template__title">Double-categoryy</h2>
        </div>
        {isFetching ? (
          <div>
            <BasicLoader />
          </div>
        ) : (
          <div className="double-category__row">
            <CategoriesCard image={categoryImg} />
            {filtered?.map((item: any) => (
              <CategoriesCard
                image={item.image}
                title={item.title}
                id={item.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoubleCategory;
