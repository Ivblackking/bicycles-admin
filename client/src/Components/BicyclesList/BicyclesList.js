import React from 'react';
import BicycleItem from '../BicycleItem/BicycleItem';
import axios from 'axios';
import { useState, useEffect } from 'react';

function BicyclesList() {
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
        <ul className='ps-0'>
            {bicycles.map(bicycle =>
                <BicycleItem key={bicycle.visibleId} bicycle={bicycle}/>
            )}
        </ul>
    );
}

export default BicyclesList;