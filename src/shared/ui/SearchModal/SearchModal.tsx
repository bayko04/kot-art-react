import "./SearchModal.scss";
import dataImg from "../../assets/images/png/pinkCat.png";
import CloseBtn from "../CloseBtn/CloseBtn";
import { useDispatch } from "react-redux";
import { setSearchModal } from "../../store/reducers/useSearchStore";
import { useEffect, useState } from "react";

const SearchModal = () => {
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState<any>([]);
  const [searchValue, setSearchValue] = useState();
  const data = [
    {
      img: dataImg,
      title: "Abc",
    },
    {
      img: dataImg,
      title: "Bbc",
    },
    {
      img: dataImg,
      title: "Ccs",
    },
    {
      img: dataImg,
      title: "Deee",
    },
    {
      img: dataImg,
      title: "Title of painting",
    },
  ];

  useEffect(() => {
    const isFiltered = data.filter((item: any) => {
      return item.title
        .toLowerCase()
        .includes((searchValue || "").toLowerCase());
    });

    setFiltered(isFiltered);
  }, [searchValue]);

  const handleClose = () => {
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
            {filtered?.map((item: any, index: number) => (
              <li key={index}>
                <div className="search-modal__data-img">
                  <img src={item?.img} alt="" />
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
