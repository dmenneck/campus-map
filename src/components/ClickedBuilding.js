import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';
import ShowBuildingData from './ShowBuildingData';

// when the user clicks on a building, the state changes

function ClickedBuilding({ map }) {
  const { value6, value2 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;
  const [layerClicked, isLayerClicked] = value2;

  let data = '';

  function OnMouseMove(browserEvent) {
    var coordinate = browserEvent.coordinate;
    var pixel = map.getPixelFromCoordinate(coordinate);

    const dataValue = map.forEachFeatureAtPixel(pixel, function (feature) {
      data = feature.values_;

      console.log(data);

      setclickedBuildingsInformation(data);
      isLayerClicked(true);
    });

    if (!dataValue && !data) {
      console.log('layer is not clicked');
      isLayerClicked(false);
    }
  }

  map.on('click', OnMouseMove);

  return (
    <div>
      <ShowBuildingData map={map} />
    </div>
  );
}

export default ClickedBuilding;
