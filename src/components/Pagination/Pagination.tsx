import paginArrowImg from "../../images/svg/arrow/ArrowPagin.svg";

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
