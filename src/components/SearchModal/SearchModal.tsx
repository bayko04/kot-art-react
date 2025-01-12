import "./SearchModal.scss";
import dataImg from "../../images/png/pinkCat.png";
import CloseBtn from "../../shared/ui/CloseBtn/CloseBtn";
import { useDispatch } from "react-redux";
import { setSearchModal } from "../../store/reducers/useSearchStore";

const SearchModal = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSearchModal(false));
  };

  return (
    <div className="search-modal">
      <form className="search-modal__form" action="">
        <div className="search-modal__search">
          <CloseBtn closeFn={handleClose} />
          <input placeholder="Search" type="text" />

          <ul className="search-modal__data">
            <li>
              <div className="search-modal__data-img">
                <img src={dataImg} alt="" />
              </div>
              <p>Title of painting</p>
            </li>
            <li>
              <div className="search-modal__data-img">
                <img src={dataImg} alt="" />
              </div>
              <p>Title of painting</p>
            </li>
            <li>
              <div className="search-modal__data-img">
                <img src={dataImg} alt="" />
              </div>
              <p>Title of painting</p>
            </li>
            <li>
              <div className="search-modal__data-img">
                <img src={dataImg} alt="" />
              </div>
              <p>Title of painting</p>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default SearchModal;
