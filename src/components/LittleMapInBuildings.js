import React from "react";
import { buildings, osmTileLayer } from "./Layers";

import OlMap from "ol/Map";
import OlView from "ol/View";

const LittleMapInBuildings = () => {
  const center = [771105.02, 6608382.01]; //Cologne

  const view = new OlView({
    center: center,
    zoom: 1.8,
    maxResolution: 14,
  });

  const map = new OlMap({
    target: "little-map",
    layers: [osmTileLayer, buildings],
    view: view,
  });

  return <div id="little-map"></div>;
};
export default LittleMapInBuildings;
