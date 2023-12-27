import React, { useState } from 'react';
import "./BicycleItem.css";
import axios from "axios";

function BicycleItem({bicycle}) {
    const [status, setStatus] = useState("Available");
    const {visibleId, name, type, color, price} = bicycle;

    const removeBicycle = async () => {
        try{
            const res = await axios.delete(`api/v1/bicycles/${bicycle._id}`);
            console.log(res.data);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <li>
            <div id="left-div">
                <h5>{name} - {type}{` (${color})`}</h5>
                <span>ID: {visibleId}</span>
                <p>STATUS: {status}</p>
            </div>
            <div id="right-div">
                <button onClick={() => removeBicycle()}>&#10006;</button>
                <br></br>
                <br></br>
                <p>{price} UAH/hr.</p>
            </div>
        </li>
    );
}

export default BicycleItem;