import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

import roomsThree from "../data/geoData/roomsThree.geojson";

import GeoJSON from "ol/format/GeoJSON";

let dataThree = "";
async function fetchDataThree() {
  const response = await fetch(roomsThree);
  const json = await response.json();
  dataThree = json;
}

fetchDataThree();

const RoomLayerThree = ({ map }) => {
  const { value6, value18 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;

  const dataThree_features = dataThree.features;

  const building_number = clickedBuildingsInformation.building_number;

  if (dataThree_features === undefined) {
    // nothing happens
  } else {
    let roomFeatureToAdd = dataThree_features.filter(
      (item) => item.properties.build_num === building_number
    );

    // get source of entrance layer
    const room_layer_source = map.getLayers().getArray()[8].getSource();

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

export default RoomLayerThree;
