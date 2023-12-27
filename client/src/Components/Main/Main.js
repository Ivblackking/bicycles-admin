import React from 'react'
import BicyclesList from '../BicyclesList/BicyclesList'
import BicycleForm from '../BicycleForm/BicycleForm'
import Statistics from '../Statistics/Statistics'

function Main() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-7'>
                <BicyclesList/>
            </div>
            <div className='col-5'>
                <BicycleForm/>
                <Statistics/>
            </div>
        </div>
    </div>
  )
}

export default Main