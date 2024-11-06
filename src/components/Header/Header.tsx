import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../../images/svg/logo.svg";
import Burger from "../Burger/Burger";
import { useDispatch, useSelector } from "react-redux";
import searchImg from "../../images/svg/header/SVG.svg";
import shopImg from "../../images/svg/header/Vector.svg";
import favoriteImg from "../../images/svg/header/Vector-1.svg";
import profileImg from "../../images/svg/header/nav.svg";
import { setBurger } from "../../store/reducers/BurgerSlice";

const Header = () => {
  const { burger } = useSelector((state: any) => state.burger);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <Burger />
          <div className="header__btn">
            <button>Talk with me</button>
          </div>

          <div className="header__logo">
            <Link to="/">
              <img src={LogoImg} alt="" />
            </Link>
          </div>

          <div className={`header__right ${burger ? "active" : ""}`}>
            <div className={`header__panel ${burger ? "active" : ""}`}>
              <Link to="/">
                <img src={searchImg} alt="" />
              </Link>
              <Link to="/">
                <img src={shopImg} alt="" />
              </Link>
              <Link to="/">
                <img src={favoriteImg} alt="" />
              </Link>
              <Link to="/">
                <img src={profileImg} alt="" />
              </Link>
            </div>

            <div className={`header__auth ${burger ? "active" : ""}`}>
              <button
                onClick={() => {
                  navigate("/auth");
                  dispatch(setBurger(false));
                }}
                className="header__signIn"
              >
                Sign in
              </button>
              <button
                onClick={() => {
                  navigate("/auth");
                  dispatch(setBurger(false));
                }}
                className="header__signUp"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
