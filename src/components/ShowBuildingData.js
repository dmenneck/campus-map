import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';

function ShowBuildingData({ map }) {
  const { value6 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;

  // write a function to get type "university" and change it to "Universität"

  let name = clickedBuildingsInformation.name;
  let barrier_free = clickedBuildingsInformation.barrier_free_entrance;
  let address = clickedBuildingsInformation.address;
  let building_number = clickedBuildingsInformation.building_number;

  console.log(clickedBuildingsInformation);

  // let facilityNames = clickedBuildingsInformation.facilities_name;

  // let str = facilityNames;

  // .split(",") throws an error :(

  // let res = str.split(',');

  // console.log(res);

  return (
    <div id='showBuildingData'>
      {/* <div className='container-table100'>
        <h3 className='containerName'>Gebäude</h3>
        <div className='wrap-table100'>
          <div className='table100-head'>
            <div className='column'>Name</div>
            <div className='column'>Gebäudenummer</div>
            <div className='column'>Addresse</div>
            <div className='column'>Barrierefreiheit</div>
          </div>
          <div>
            <div className='column'>{name}</div>
            <div className='column'>{building_number}</div>
            <div className='column'>{address}</div>
            <div className='column'>{barrier_free}</div>
          </div>
        </div>
        <h3 className='containerName' id='einrichtungen'>
          Einrichtungen
        </h3>
        <div>
          <div>Erste Einrichtung</div>
        </div>
      </div> */}
    </div>
  );
}

export default ShowBuildingData;
