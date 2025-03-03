import { Link, useNavigate } from "react-router-dom";
// import inImg from "../../shared/assets/images/png/in.png";
// import youtubeImg from "../../shared/assets/images/png/you.png";
import facebookImg from "../../shared/assets/images/svg/footer/facebook.svg";
import instImg from "../../shared/assets/images/svg/footer/inst.svg";
import googleImg from "../../shared/assets/images/svg/footer/google.svg";
import logoWhite from "../../shared/assets/images/svg/footer/logo.svg";
import pinterestImg from "../../shared/assets/images/svg/footer/pinterest.svg";
import paymentImg from "../../shared/assets/images/png/payments.png";
import "./Footer.scss";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#E9EAEC" }}>
      <div className="footer">
        <div onClick={() => navigate("/")} className="footer__logo">
          <img src={logoWhite} alt="" />
        </div>
        <div className="footer__lists">
          <div className="footer__column">
            <h3>Pages</h3>
            <ul className="footer__list">
              <li>
                <Link to="about-us">About</Link>
              </li>
              <li>
                <Link to="/authors-list">Artists</Link>
              </li>
              {/* <li><Link to="/gallery">Collections</Link></li> */}
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/nft-list">NFT</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Services</h3>
            <ul className="footer__list">
              <li>
                <Link to="/all-artworks">All Artworks</Link>
              </li>
              <li>
                <Link to="/gallery">Artist Collaborations</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Contact</h3>
            <ul className="footer__list">
              <li className="footer__contact">
                <a className="footer__number" href="">
                  972-053-203-0518
                </a>
              </li>
              <li className="footer__contact">
                <a className="footer__gmail" href="">
                  kot.art.rj@gmail.com
                </a>
              </li>
              <li className="footer__contact">
                <a className="footer__adress" href="">
                  Tel aviv, Rotshild 77, Israel
                </a>
              </li>
            </ul>
          </div>

          {/* Стили посмотри внимательо для adress и gmail они не работют из-за перекрывания */}
          <div className="footer__column">
            <div className="footer__media">
              <h3>Subscription</h3>
              <div className="footer__media-row">
                <img src={facebookImg} alt="" />
                {/* <img src={youtubeImg} alt="" /> */}
                {/* <img src={inImg} alt="" /> */}
                <img src={instImg} alt="" />
                <img src={googleImg} alt="" />
                <img src={pinterestImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__payment">
        <img src={paymentImg} alt="" />
      </div>
    </div>
  );
};

export default Footer;
