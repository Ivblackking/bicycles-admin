import React from 'react';
import "./BicycleItem.css";
import axios from "axios";

function BicycleItem({bicycle}) {
    const {visibleId, name, type, color, price, status} = bicycle;
    const statuses = ["Available", "Busy", "Unavailable"];

    const removeBicycle = async () => {
        try{
            const res = await axios.delete(`api/v1/bicycles/${bicycle._id}`);
            console.log(res.data);
        }catch(error){
            console.log(error);
        }
    }

    const changeStatus = async (newStatus) => {
        try{
            const res = await axios.patch(`api/v1/bicycles/${bicycle._id}`, {status: newStatus});
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
                <p>STATUS: 
                    <select defaultValue={status} onChange={(e) => changeStatus(e.target.value)}>
                        {statuses.map((status, i) => <option key={i} value={status}>{status}</option>)}
                    </select>
                </p>
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