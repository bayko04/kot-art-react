import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../../shared/assets/images/svg/logo.svg";
import Burger from "../Burger/Burger";
import { useDispatch, useSelector } from "react-redux";
import searchImg from "../../shared/assets/images/svg/header/SVG.svg";
import shopImg from "../../shared/assets/images/svg/header/Vector.svg";
import favoriteImg from "../../shared/assets/images/svg/header/favoriteUn.svg";
import profileImg from "../../shared/assets/images/svg/header/nav.svg";
import { setBurger } from "../../shared/store/reducers/BurgerSlice";
import "./Header.scss";
import { setSearchModal } from "../../shared/store/reducers/useSearchStore";
import facebookImg from "../../shared/assets/images/svg/footer/facebook.svg";
import instImg from "../../shared/assets/images/svg/footer/inst.svg";
import googleImg from "../../shared/assets/images/svg/footer/google.svg";
import pinterestImg from "../../shared/assets/images/svg/footer/pinterest.svg";

const Header = () => {
  const { burger } = useSelector((state: any) => state.burger);
  const { isAuth } = useSelector((state: any) => state.auth);
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
              <Link onClick={() => dispatch(setSearchModal(true))} to="/">
                <img src={searchImg} alt="" />
              </Link>
              {/* <Link to="/">
                <img src={shopImg} alt="" />
              </Link> */}
              <Link to="/profile/favorite">
                <img src={favoriteImg} alt="" />
              </Link>
              {/* <Link to="/">
                <img src={profileImg} alt="" />
              </Link> */}
            </div>

            {!isAuth && (
              <div className={`header__auth ${burger ? "active" : ""}`}>
                <button
                  onClick={() => {
                    navigate("/auth/sign-in");
                    dispatch(setBurger(false));
                  }}
                  className="header__signIn"
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    navigate("/auth/sign-up");
                    dispatch(setBurger(false));
                  }}
                  className="header__signUp"
                >
                  Sign up
                </button>
              </div>
            )}

            <div className={`header__network ${burger ? "active" : ""}`}>
              <div className="header__network-row">
                <img src={facebookImg} alt="" />
                <img src={instImg} alt="" />
                <img src={googleImg} alt="" />
                <img src={pinterestImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
