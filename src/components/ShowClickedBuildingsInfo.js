import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const ShowClickedBuildingsInfo = () => {
  const { value6 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;

  let data = clickedBuildingsInformation;

  return <div>hello</div>;
};

export default ShowClickedBuildingsInfo;
