import React from "react"

const FindArt = () => {
    return (
        <div className="find-art">
            <div className="container">
                <h2 className="find-art__title">find your art</h2>
                <p className="find-art__text">
                    A variety of self-search options or the option of direct
                    contact for a special painting order
                </p>
                <div className="find-art__btns">
                    <button className="find-art__yourself">
                        do it yorself
                    </button>
                    <button className="find-art__help">help me</button>
                </div>
            </div>
        </div>
    )
}

export default FindArt
