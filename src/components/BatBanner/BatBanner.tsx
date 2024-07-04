import React from "react"
import batImg from "../../images/png/batman.png"
import { Link } from "react-router-dom"

const BatBanner = () => {
    return (
        <div className="bat-banner">
            <div className="container">
                <div className="bat-banner__row">
                    <div className="bat-banner__img">
                        <img
                            src={batImg}
                            alt=""
                        />
                    </div>
                    <div className="bat-banner__btn">
                        <Link to="">see collections</Link>
                    </div>
                    <div className="bat-banner__content">
                        <h4 className="bat-banner__title">
                            Artist <br /> Collaborations:
                        </h4>
                        <p className="bat-banner__text">
                            An ongoing series of collectible, limited- edition
                            product drops from some of the biggest names in
                            contemporary art.
                        </p>
                        <div className="bat-banner__link">
                            <Link to="">Discover</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BatBanner
