import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import roomsOne from '../data/geoData/roomsOne.geojson';
import GeoJSON from 'ol/format/GeoJSON';

let data = '';
async function fetchData() {
  const response = await fetch(roomsOne);
  const json = await response.json();
  data = json;
}

const RoomLayers = ({ map }) => {
  const { value6 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;

  fetchData();

  const data_features = data.features;
  const building_number = clickedBuildingsInformation.building_number;

  if (data_features === undefined) {
    console.log('undefined');
  } else {
    const roomFeatureToAdd = data_features.filter(
      (item) => item.properties.build_num === building_number
    );

    // get source of entrance layer
    const room_layer_source = map.getLayers().getArray()[6].getSource();

    // get layer and set z index to render over buildings layer
    const room_layer = map.getLayers().getArray()[6];
    room_layer.setZIndex(1001);

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

export default RoomLayers;
