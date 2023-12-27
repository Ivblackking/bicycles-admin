import React, { useState } from 'react';
import "./BicycleItem.css";

function BicycleItem({bicycle}) {
    const [status, setStatus] = useState("Available");
    const {visibleId, name, type, color, price} = bicycle;

    return (
        <li>
            <div id="left-div">
                <h5>{name} - {type}{` (${color})`}</h5>
                <span>ID: {visibleId}</span>
                <p>STATUS: {status}</p>
            </div>
            <div id="right-div">
                <button>&#10006;</button>
                <br></br>
                <br></br>
                <p>{price} UAH/hr.</p>
            </div>
        </li>
    );
}

export default BicycleItem;