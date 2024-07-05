import React from "react"
import { Link } from "react-router-dom"
import instImg from '../../images/png/inst.png'
import inImg from '../../images/png/in.png'
import facebookImg from '../../images/png/facebook.png'
import youtubeImg from '../../images/png/you.png'
import googleImg from '../../images/png/google.png'
import logoWhite from '../../images/svg/whiteLogo.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__lists">
                <div className="footer__column">
                    <h3>INFO</h3>
                    <ul className="footer__list">
                        <li>
                            <Link to="">About</Link>
                        </li>
                        <li>
                            <Link to="">Contact us</Link>
                        </li>
                        <li>
                            <Link to="">Arrival</Link>
                        </li>
                        <li>
                            <Link to="">TERMS & CONDITIONS</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>TAKE A LOOK</h3>
                    <ul className="footer__list">
                        <li>
                            <Link to="">ARTISTS</Link>
                        </li>
                        <li>
                            <Link to="">ARTWORKS</Link>
                        </li>
    
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>WE’RE LISTENING</h3>
                    <ul className="footer__list">
                        <li className="footer__contact">
                            <a className="footer__number" href="">972-053-203-0518</a>
                            <a className="footer__gmail" href="">kot.art.rj@gmail.com</a>
                        </li>
                        <li className="footer__adress">
                            <Link to="">Kot-art Gallery</Link>
                        </li >
                        <li className="footer__adress">
                            <Link to="">Hanagar 9 St.</Link>
                        </li>
                        <li className="footer__adress">
                            <Link to="">Ashkelon, Israel</Link>
                        </li>
                    </ul>
                </div>

{/* Стили посмотри внимательо для adress и gmail они не работют из-за перекрывания */}
                <div className="footer__column">
                    <div className="footer__media">
                        <h3>FOLLOW US</h3>
                        <div className="footer__media-row">
                            <img src={facebookImg} alt="" />
                            <img src={youtubeImg} alt="" />
                            <img src={inImg} alt="" />
                            <img src={instImg} alt="" />
                            <img src={googleImg} alt="" />
                        </div>
                        <div className="footer__logo">
                            <img src={logoWhite} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__payment">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Footer
