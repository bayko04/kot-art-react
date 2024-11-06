import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UnderHeader = () => {
  const { burger } = useSelector((state: any) => state.burger);

  return (
    <div className="underHeader">
      <ul className={`underHeader__list ${burger ? "active" : ""}`}>
        <li className="underHeader__item">
          <Link to="#">HOME</Link>
        </li>
        <li className="underHeader__item">
          <Link to="/author">ARTISTS</Link>
        </li>
        <li className="underHeader__item">
          <Link to="#">ARTWORKS</Link>
        </li>
        <li className="underHeader__item">
          <Link to="#">THE GALLERY</Link>
        </li>
        <li className="underHeader__item">
          <Link to="#">CONTACT US</Link>
        </li>
      </ul>
    </div>
  );
};

export default UnderHeader;
