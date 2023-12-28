import React from 'react';
import "./BicycleForm.css";
import {useState} from 'react';
import axios from "axios";
import validation from './Validation';

function BicycleForm() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [color, setColor] = useState("");
    const [wheelSize, setWheelSize] = useState("");
    const [price, setPrice] = useState("");
    const [visibleId, setVisibleId] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState({});

    const addNewBicycle = async () => {
        const newBicycle = {
            name,
            type,
            color,
            wheel_size: Number(wheelSize),
            price: Number(price),
            description
        }

        try {
            const res = await axios.post(`api/v1/bicycles/${visibleId}`, newBicycle);
            console.log(res.data);
        }catch(error){
            console.log(error);
            const uniqueIdError = `E11000 duplicate key error collection: test.bicylce2 index: visibleId_1 dup key: { visibleId: "${visibleId}" }`;
            if (error.response.data.message === uniqueIdError){
                setErrors({visibleId: "This ID already exists"});
            }
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        const errs = validation({name, type, color, wheelSize, price, visibleId, description});
        setErrors(errs);

        if (!Object.keys(errs).length){
            addNewBicycle();
        }else{
            console.error("Invalid data!");
        }
    }

    const clearForm = () => {
        const inputs = document.querySelectorAll('.inputs-text input');
        const textarea = document.querySelector('.description');

        inputs.forEach(input=>input.value = "");
        textarea.value = "";

        setErrors({});
    }

    const errorStyle = {
        color: "red",
        fontSize: '10px',
        display: "block"
    }

    return (
        <form onSubmit={submitForm}>
            <div className='inputs-text'>
                <div>
                    <input onChange={e=>setName(e.target.value)} type="text" placeholder='Name'/>
                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
                </div>
                <div>
                    <input onChange={e=>setType(e.target.value)} type="text" placeholder='Type'/>
                    {errors.type && <span style={errorStyle}>{errors.type}</span>}
                </div>
                <div>
                    <input onChange={e=>setColor(e.target.value)} type="text" placeholder='Color'/>
                    {errors.color && <span style={errorStyle}>{errors.color}</span>}
                </div>
                <div>
                    <input onChange={e=>setWheelSize(e.target.value)} type="text" placeholder='Wheel size'/>
                    {errors.wheelSize && <span style={errorStyle}>{errors.wheelSize}</span>}
                </div>
                <div>
                    <input onChange={e=>setPrice(e.target.value)} type="text" placeholder='Price'/>
                    {errors.price && <span style={errorStyle}>{errors.price}</span>}
                </div>
                <div>
                    <input onChange={e=>setVisibleId(e.target.value)} type="text" placeholder='ID (slug): XXXXXXXXXXXXX'/>
                    {errors.visibleId && <span style={errorStyle}>{errors.visibleId}</span>}
                </div>
            </div>
            <div className='description-wrapper'>
                <textarea onChange={e=>setDescription(e.target.value)} placeholder="Description" className='description'/>
                {errors.description && <span style={errorStyle}>{errors.description}</span>}
            </div>
            <div className='buttons'>
                <button type="submit">SAVE</button>
                <button type="reset" onClick={clearForm}>CLEAR</button>
            </div>
        </form>
  )
}

export default BicycleForm