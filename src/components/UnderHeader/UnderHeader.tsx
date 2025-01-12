import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setBurger } from "../../store/reducers/BurgerSlice";

const UnderHeader = () => {
  const { burger } = useSelector((state: any) => state.burger);
  const dispatch = useDispatch();

  console.log(burger);
  return (
    <div className="underHeader">
      <ul className={`underHeader__list ${burger ? "active" : ""}`}>
        <li className="underHeader__item">
          <Link to="/">HOME</Link>
        </li>
        <li
          onClick={() => dispatch(setBurger(false))}
          className="underHeader__item"
        >
          <Link to="/authors-list">ARTISTS</Link>
        </li>
        <li className="underHeader__item">
          <Link to="/all-artworks">ARTWORKS</Link>
        </li>
        <li className="underHeader__item">
          <Link to="/gallery">THE GALLERY</Link>
        </li>
        <li className="underHeader__item">
          <Link to="/contacts">CONTACT US</Link>
        </li>
      </ul>
    </div>
  );
};

export default UnderHeader;
