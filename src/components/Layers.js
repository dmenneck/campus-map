import React from 'react';

import OlVector from 'ol/layer/Vector';
import OlVectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Fill, Stroke } from 'ol/style';

import buildingsData from '../data/geoData/buildingsData.geojson';

// adding GeoJSON to the map (buildings)

export const Buildings = new OlVector({
  source: new OlVectorSource({
    url: buildingsData,
    format: new GeoJSON()
  }),
  style: new Style({
    //stroke: new Stroke({
    //color: "black",
    //width: 0.2
    // }),
    fill: new Fill({
      color: '#4a657d'
    })
  }),
  minResolution: 0.4
});
