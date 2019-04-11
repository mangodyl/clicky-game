import React from "react";
import "./style.css";

const Pic = ({
    src = 'https://placehold.it/300x300',
    name,
    id,
    handleClick
}) => {
    return (
        <div className="col-sm-6">
            <div>
                <h5>{name}</h5>
                <img src={src} data-id={id} onClick={handleClick} className="click-img" alt="clickable item for game"></img>
            </div>
        </div>
    )
}

export default Pic;