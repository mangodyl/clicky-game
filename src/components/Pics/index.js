import React from "react";
import "./style.css";

const Pic = ({
    src,
    name,
    id,
    imgClick
}) => {
    return (
        <div className="pic-div">
            <h5>{name}</h5>
            <img src={src} data-id={id} onClick={imgClick} className="click-img" alt="clickable item for game"></img>
        </div>
    )
}

export default Pic;