import OlVector from 'ol/layer/Vector';
import OlVectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Fill, Stroke } from 'ol/style';

import buildingsData from '../data/geoData/uniBuildings.geojson';
import parkingData from '../data/geoData/parking.geojson';
import entrancesData from '../data/geoData/entrances.geojson';
import familyCampusData from '../data/geoData/familyCampus.geojson';

import parkenUni from '../data/img/parkenUni.png';
import barrierfreeEntrance from '../data/img/barrierefreierEingang.jpeg';
import wickelraum from '../data/img/wickelraum.png';

import OlStyleIcon from 'ol/style/Icon';
import OlStyle from 'ol/style/Style';

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
  style: new OlStyle({
    image: new OlStyleIcon({
      scale: 1,
      src: parkenUni,
    }),
  }),
  minResolution: 0.4,
});

// create entrances layer
export const entrances = new OlVector({
  source: new OlVectorSource({
    url: entrancesData,
    format: new GeoJSON(),
  }),
  style: new OlStyle({
    image: new OlStyleIcon({
      scale: 0.01,
      src: barrierfreeEntrance,
    }),
  }),
  minResolution: 0.4,
});

// create familyCampus layer
export const familyCampus = new OlVector({
  source: new OlVectorSource({
    url: familyCampusData,
    format: new GeoJSON(),
  }),
  style: new OlStyle({
    image: new OlStyleIcon({
      scale: 1,
      src: wickelraum,
    }),
  }),
  minResolution: 0.4,
});
