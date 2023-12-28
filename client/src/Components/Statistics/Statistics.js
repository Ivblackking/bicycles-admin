import React from 'react'

function Statistics({bicycles}) {
  const totalBikes = bicycles.length;
  const availableBikes = bicycles.filter(el=>el.status === "Available").length;
  const bookedBikes = bicycles.filter(el=>el.status === "Busy").length;
  const averagBikeCost = bicycles.map(el=>el.price).reduce((a,b)=>a+b, 0) / totalBikes;

  return (
    <div>
      <h5>Statistics</h5>
      <p>
        Total Bikes: <span>{totalBikes}</span><br></br>
        Available Bikes : <span>{availableBikes}</span><br></br>
        Booked Bikes: <span>{bookedBikes}</span><br></br>
        Average bike cost: <span>{averagBikeCost.toFixed(2)}</span> UAH/hr.
      </p>
    </div>
  )
}

export default Statistics