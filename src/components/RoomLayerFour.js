import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

import roomsFour from "../data/geoData/roomsFour.geojson";

import GeoJSON from "ol/format/GeoJSON";

let dataFour = "";
async function fetchDataFour() {
  const response = await fetch(roomsFour);
  const json = await response.json();
  dataFour = json;
}

fetchDataFour();

const RoomLayerFour = ({ map }) => {
  const { value6, value18 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;

  const dataFour_features = dataFour.features;

  const building_number = clickedBuildingsInformation.building_number;

  if (dataFour_features === undefined) {
    // nothing happens
  } else {
    let roomFeatureToAdd = dataFour_features.filter(
      (item) => item.properties.build_num === building_number
    );

    // get source of entrance layer
    const room_layer_source = map.getLayers().getArray()[10].getSource();

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

export default RoomLayerFour;
