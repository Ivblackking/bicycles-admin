import React from 'react'
import BicyclesList from '../BicyclesList/BicyclesList'
import BicycleForm from '../BicycleForm/BicycleForm'
import Statistics from '../Statistics/Statistics'
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';

function Main() {
  const [bicycles, setBicyles] = useState([]);
  
    useEffect(() => {
      const getDataFromAPI = async () => {
        try {
            const response = await axios.get('api/v1/bicycles');
            const data = await response.data;
            setBicyles(data);
        } catch (error) {
          console.error(error);
        }
      };
      getDataFromAPI();
    }, [bicycles]);

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='mycol leftcol col-7'>
                <BicyclesList bicycles={bicycles}/>
            </div>
            <div className='mycol col-5'>
                <BicycleForm/>
                <Statistics bicycles={bicycles}/>
            </div>
        </div>
    </div>
  )
}

export default Main