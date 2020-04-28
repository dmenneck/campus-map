import OlVector from 'ol/layer/Vector';
import OlVectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Fill, Stroke } from 'ol/style';

import buildingsData from '../data/geoData/uniBuildings.geojson';
import parkingData from '../data/geoData/parking.geojson';

// create Buildings layer
export const buildings = new OlVector({
  source: new OlVectorSource({
    url: buildingsData,
    format: new GeoJSON(),
  }),
  style: new Style({
    stroke: new Stroke({
      color: 'black',
      width: 1.2,
    }),
    fill: new Fill({
      color: '#4a657d',
    }),
  }),
  minResolution: 0.4,
});

// create parking layer
export const parking = new OlVector({
  source: new OlVectorSource({
    url: parkingData,
    format: new GeoJSON(),
  }),

  minResolution: 0.4,
});
