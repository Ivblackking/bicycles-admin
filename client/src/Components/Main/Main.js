import React from 'react'
import BicyclesList from '../BicyclesList/BicyclesList'
import BicycleForm from '../BicycleForm/BicycleForm'
import Statistics from '../Statistics/Statistics'
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';

function Main() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='mycol col-7'>
                <BicyclesList/>
            </div>
            <div className='mycol col-5'>
                <BicycleForm/>
                <Statistics/>
            </div>
        </div>
    </div>
  )
}

export default Main