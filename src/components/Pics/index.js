import React from "react";
import "./style.css";

const Pic = ({
    src = 'https://placehold.it/200x200',
    name,
    id,
    handleClick
}) => {
    return (
        <div className="col">
            <div>
                <h5>{name}</h5>
                <img src={src} data-id={id} onClick={handleClick} className="click-img" alt="clickable item for game"></img>
            </div>
        </div>
    )
}

export default Pic;