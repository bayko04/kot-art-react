import React from "react"

const FirstSection = () => {
    return (
        <div className="first-section">
            <div className="container">
                <div className="first-section__row">
                    <div className="first-section__left">
                        <h1 className="first-section__title">
                            Browse new collection
                        </h1>
                        <p className="first-section__text">
                            Available until 3:00 PM, May 31, 2024.
                        </p>
                        <div className="first-section__btn">
                            <button>see this item</button>
                        </div>
                    </div>
                    <div className="first-section__rigth">
                        <div className="first-section__timer">timer</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection
