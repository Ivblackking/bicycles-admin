import React from 'react';
import "./BicycleForm.css";
import {useState} from 'react';
import axios from "axios";

function BicycleForm() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [color, setColor] = useState("");
    const [wheelSize, setWheelSize] = useState(0.0);
    const [price, setPrice] = useState(0.0);
    const [visibleId, setVisibleId] = useState("");
    const [description, setDescription] = useState("");

    const addNewBicycle = async () => {
        const newBicycle = {
            name,
            type,
            color,
            wheel_size: wheelSize,
            price,
            description
        }

        try {
            const res = await axios.post(`api/v1/bicycles/${visibleId}`, newBicycle);
            console.log(res.data);
        }catch(error){
            console.log(error);
        }
    }

    const clearForm = () => {
        const inputs = document.querySelectorAll('.inputs-text input');
        const textarea = document.querySelector('.description');
        inputs.forEach(input=>input.value = "");
        textarea.value = "";
    }

    return (
        <div>
            <div className='inputs-text'>
                <input onChange={e=>setName(e.target.value)} type="text" placeholder='Name'/>
                <input onChange={e=>setType(e.target.value)} type="text" placeholder='Type'/>
                <input onChange={e=>setColor(e.target.value)} type="text" placeholder='Color'/>
                <input onChange={e=>setWheelSize(Number(e.target.value))} type="text" placeholder='Wheel size'/>
                <input onChange={e=>setPrice(Number(e.target.value))} type="text" placeholder='Price'/>
                <input onChange={e=>setVisibleId(e.target.value)} type="text" placeholder='ID (slug): XXXXXXXXXXXXX'/>
            </div>
            <textarea onChange={e=>setDescription(e.target.value)} placeholder="Description" className='description'/>
            <div className='buttons'>
                <button onClick={() => addNewBicycle()}>SAVE</button>
                <button onClick={clearForm}>CLEAR</button>
            </div>
        </div>
  )
}

export default BicycleForm