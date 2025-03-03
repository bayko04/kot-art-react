import "./SearchModal.scss";
import dataImg from "../../assets/images/png/pinkCat.png";
import CloseBtn from "../CloseBtn/CloseBtn";
import { useDispatch } from "react-redux";
import { setSearchModal } from "../../store/reducers/useSearchStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ data }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState<any>([]);
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    const isFiltered = data?.results?.filter((item: any) => {
      return item.title
        .toLowerCase()
        .includes((searchValue || "").toLowerCase());
    });

    setFiltered(isFiltered);
  }, [searchValue]);

  const handleClose = () => {
    dispatch(setSearchModal(false));
  };

  const navigateToPainting = (id: number) => {
    navigate(`painting-details/${id}`);
    dispatch(setSearchModal(false));
  };

  return (
    <div className="search-modal">
      <form className="search-modal__form" action="">
        <div className="search-modal__search">
          <CloseBtn closeFn={handleClose} />
          <input
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
            placeholder="Search"
            type="text"
          />

          <ul className="search-modal__data">
            {/* <li>
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
            </li> */}
            {filtered?.slice(0, 4)?.map((item: any, index: number) => (
              <li onClick={() => navigateToPainting(item.id)} key={index}>
                <div className="search-modal__data-img">
                  <img src={item?.image} alt="" />
                </div>
                <p>{item?.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default SearchModal;
