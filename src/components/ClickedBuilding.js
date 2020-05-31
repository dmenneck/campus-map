import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import ShowBuildingData from "./ShowBuildingData";

// when user clicks on a building, the state changes

function ClickedBuilding({ map }) {
  const { value6, value2 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;
  const [layerClicked, isLayerClicked] = value2;

  // get attributes from building layer
  let data = "";

  function OnMouseMove(e) {
    var coordinate = e.coordinate;
    var pixel = map.getPixelFromCoordinate(coordinate);

    const dataValues = map.forEachFeatureAtPixel(pixel, function (feature) {
      data = feature.getProperties();

      setclickedBuildingsInformation(data);
      isLayerClicked(true);
      e.preventDefault();
    });

    // check wether layer (one of the buidling polygons) is clicked or not
    if (!dataValues && !data) {
      isLayerClicked(false);
    } else {
      isLayerClicked(true);
    }
  }

  map.on("click", OnMouseMove);

  return (
    <div>
      <ShowBuildingData map={map} />
    </div>
  );
}

export default ClickedBuilding;
