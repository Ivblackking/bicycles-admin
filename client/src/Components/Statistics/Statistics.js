import React from 'react';
import "./Statistics.css";

function Statistics({bicycles}) {
  const totalBikes = bicycles.length;
  const availableBikes = bicycles.filter(el=>el.status === "Available").length;
  const bookedBikes = bicycles.filter(el=>el.status === "Busy").length;
  const averagBikeCost = bicycles.map(el=>el.price).reduce((a,b)=>a+b, 0) / totalBikes;

  const spanStyle = {fontWeight: 700}

  return (
    <div className='statistics'>
      <h5>STATISTICS</h5>
      <p>
        Total Bikes: <span style={spanStyle}>{totalBikes}</span><br></br>
        Available Bikes : <span style={spanStyle}>{availableBikes}</span><br></br>
        Booked Bikes: <span style={spanStyle}>{bookedBikes}</span><br></br>
        Average bike cost: <span style={spanStyle}>{averagBikeCost.toFixed(2)}</span> UAH/hr.
      </p>
    </div>
  )
}

export default Statistics