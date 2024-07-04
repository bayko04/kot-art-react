import React from "react"
import { Link } from "react-router-dom"

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
                            <Link to="">About</Link>
                        </li>
                        <li>
                            <Link to="">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>INFO</h3>
                    <ul className="footer__list">
                        <li>
                            <Link to="">About</Link>
                        </li>
                        <li>
                            <Link to="">About</Link>
                        </li>
                        <li>
                            <Link to="">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>INFO</h3>
                    <ul className="footer__list">
                        <li>
                            <Link to="">About</Link>
                        </li>
                        <li>
                            <Link to="">About</Link>
                        </li>
                        <li>
                            <Link to="">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__column">
                    <div className="footer__media">media</div>
                </div>
            </div>

            <div className="footer__payment"></div>
        </div>
    )
}

export default Footer
