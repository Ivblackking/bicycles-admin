import React from 'react';
import BicycleItem from '../BicycleItem/BicycleItem';

function BicyclesList({bicycles}) {
    return (
        <ul className='ps-0'>
            {bicycles.map(bicycle =>
                <BicycleItem key={bicycle.visibleId} bicycle={bicycle}/>
            )}
        </ul>
    );
}

export default BicyclesList;