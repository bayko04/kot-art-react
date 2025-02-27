import { FC } from "react";
import paginArrowImg from "../../shared/assets/images/svg/arrow/ArrowPagin.svg";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

interface IProps {
  count: number;
  handlePageClick: (event: any) => void;
  pageSize: number;
}

const Pagination: FC<IProps> = ({ count, handlePageClick, pageSize }) => {
  // return (
  //   <ul className="pagination">
  //     <li>1</li>
  //     <li>2</li>
  //     <li>3</li>
  //     <li>...</li>
  //     <li>5</li>
  //     <li>
  //       <img src={paginArrowImg} alt="" />
  //     </li>
  //   </ul>
  // );

  return (
    <div>
      {/* Пагинация */}
      <ReactPaginate
        previousLabel={<img src={paginArrowImg} alt="" />}
        nextLabel={<img src={paginArrowImg} alt="" />}
        breakLabel={"..."}
        pageCount={Math.floor(count / pageSize)}
        marginPagesDisplayed={1} // Кол-во страниц по бокам
        pageRangeDisplayed={2} // Кол-во страниц в центре
        onPageChange={handlePageClick}
        containerClassName={"pagination"} // CSS-класс контейнера
        activeClassName={"active"} // CSS-класс активной страницы
        previousClassName={"prev-button"} // Добавляем класс
        nextClassName={"next-button"} // Добавляем класс
        disabledClassName={"disabled"}
      />
    </div>
  );
};

export default Pagination;
