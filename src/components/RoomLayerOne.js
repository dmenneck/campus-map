import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import roomsOne from "../data/geoData/roomsOne.geojson";
import roomsTwo from "../data/geoData/roomsTwo.geojson";
import roomsThree from "../data/geoData/roomsThree.geojson";

import GeoJSON from "ol/format/GeoJSON";

let dataOne = "";
async function fetchDataOne() {
  const response = await fetch(roomsOne);
  const json = await response.json();
  dataOne = json;
}

fetchDataOne();

const RoomLayerOne = ({ map }) => {
  const { value6, value18 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;

  const dataOne_features = dataOne.features;

  const building_number = clickedBuildingsInformation.building_number;

  if (dataOne_features === undefined) {
    // nothing happens
  } else {
    let roomFeatureToAdd = dataOne_features.filter(
      (item) => item.properties.build_num === building_number
    );

    // get source of entrance layer
    const room_layer_source = map.getLayers().getArray()[6].getSource();

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

export default RoomLayerOne;
