import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

import roomsTwo from "../data/geoData/roomsTwo.geojson";

import GeoJSON from "ol/format/GeoJSON";

let dataTwo = "";
async function fetchDataTwo() {
  const response = await fetch(roomsTwo);
  const json = await response.json();
  dataTwo = json;
}

fetchDataTwo();

const RoomLayerTwo = ({ map }) => {
  const { value6, value18 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;

  const dataTwo_features = dataTwo.features;

  const building_number = clickedBuildingsInformation.building_number;

  if (dataTwo_features === undefined) {
    // nothing happens
  } else {
    let roomFeatureToAdd = dataTwo_features.filter(
      (item) => item.properties.build_num === building_number
    );

    // get source of entrance layer
    const room_layer_source = map.getLayers().getArray()[7].getSource();

    // transform object to GeoJSON
    const format = new GeoJSON();
    const olFeatures = roomFeatureToAdd.map((feature) =>
      format.readFeature(feature)
    );

    // clear source so that only the clicked building entrances appear
    room_layer_source.clear();
    // add features to source
    room_layer_source.addFeatures(olFeatures);
  }

  return <div></div>;
};

export default RoomLayerTwo;
