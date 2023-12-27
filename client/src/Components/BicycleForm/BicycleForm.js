import React from 'react';
import "./BicycleForm.css";

function BicycleForm() {
    return (
        <form>
            <div className='inputs-text'>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Type'/>
                <input type="text" placeholder='Color'/>
                <input type="text" placeholder='Wheel size'/>
                <input type="text" placeholder='Price'/>
                <input type="text" placeholder='ID (slug): XXXXXXXXXXXXX'/>
            </div>
            <textarea placeholder="Description" className='description'></textarea>
            <div className='buttons'>
                <button>SAVE</button>
                <button>CLEAR</button>
            </div>
        </form>
  )
}

export default BicycleForm