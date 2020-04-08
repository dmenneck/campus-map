import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';
import ShowBuildingData from './ShowBuildingData';

// when the user clicks on a building, the state changes

function ClickedBuilding({ map }) {
  const { value6 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;
  let data = '';

  function OnMouseMove(browserEvent) {
    var coordinate = browserEvent.coordinate;
    var pixel = map.getPixelFromCoordinate(coordinate);

    map.forEachFeatureAtPixel(pixel, function (feature) {
      data = feature.values_;

      setclickedBuildingsInformation(data);
    });
  }

  map.on('click', OnMouseMove);

  return (
    <div>
      <ShowBuildingData map={map} />
    </div>
  );
}

export default ClickedBuilding;
