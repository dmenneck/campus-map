import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from './AppContext';
import ShowBuildingData from './ShowBuildingData';

// when user clicks on a building, the state changes

function ClickedBuilding({ map }) {
  const { value6, value2 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;
  const [layerClicked, isLayerClicked] = value2;

  // get attributes from building layer
  let data = '';

  function OnMouseMove(browserEvent) {
    var coordinate = browserEvent.coordinate;
    var pixel = map.getPixelFromCoordinate(coordinate);

    const dataValues = map.forEachFeatureAtPixel(pixel, function (feature) {
      data = feature.values_;
      console.log(data);
      setclickedBuildingsInformation(data);
      isLayerClicked(true);
    });

    // check wether layer (one of the buidling polygons) is clicked or not
    if (!dataValues && !data) {
      console.log('not clicked on a layer');
      isLayerClicked(false);
    } else {
      console.log('clicked on a layer');
      isLayerClicked(true);
    }
  }

  console.log(data);

  map.on('click', OnMouseMove);

  return (
    <div>
      <ShowBuildingData map={map} />
    </div>
  );
}

export default ClickedBuilding;
