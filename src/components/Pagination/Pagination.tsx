import paginArrowImg from "../../shared/assets/images/svg/arrow/ArrowPagin.svg";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <ul className="pagination">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>...</li>
      <li>5</li>
      <li>
        <img src={paginArrowImg} alt="" />
      </li>
    </ul>
  );
};

export default Pagination;
