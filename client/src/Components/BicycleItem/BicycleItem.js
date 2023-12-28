import React from 'react';
import "./BicycleItem.css";
import axios from "axios";

function BicycleItem({bicycle}) {
    const {visibleId, name, type, color, price, status} = bicycle;
    const statuses = ["Available", "Busy", "Unavailable"];

    let style;
    switch(status){
        case "Available": {
            style = { borderColor: "#6FCF97"};
            break;
        }
        case "Busy": {
            style = { borderColor: "#F2994A"};
            break;
        }
        case "Unavailable": {
            style = { 
                borderColor: "#EB5757",
                opacity: 0.5
            };
            break;
        }
        default: {
            style = { borderColor: "#6FCF97"};
        }
    }

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
        <li style={style}>
            <div id="left-div">
                <h5>
                    <span style={{fontWeight: "bold"}}>
                        {name.toUpperCase()}
                    </span> - {type.toUpperCase()}{` (${color.toUpperCase()})`}
                </h5>
                <span>ID: {visibleId}</span>
                <p>STATUS:&emsp;
                    <select defaultValue={status} onChange={(e) => changeStatus(e.target.value)}>
                        {statuses.map((status, i) => <option key={i} value={status}>{status}</option>)}
                    </select>
                </p>
            </div>
            <div id="right-div">
                <button onClick={() => removeBicycle()}>&#10006;</button>
                <p className='price'>{price} UAH/hr.</p>
            </div>
        </li>
    );
}

export default BicycleItem;