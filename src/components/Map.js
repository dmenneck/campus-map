import React, { useContext } from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import {
  defaults as defaultControls,
  FullScreen,
  OverviewMap,
} from 'ol/control';

import '../App.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
import { MapComponent } from '@terrestris/react-geo';

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import { LayerGroup } from './LayerGroup';

import { Buildings } from './Layers';
import { ControlButtons } from './ControlButtons';
import { FunctionalButtons } from './FunctionalButtons';
import { ContextProvider } from './AppContext';
import DrawerComponent from './Drawer';
import ClickedBuilding from './ClickedBuilding';
import SearchComponent from './Search';

// global variables
const center = [771105.02, 6608382.01]; //Cologne
const url = 'https://api.nextbike.net/maps/nextbike-live.json?city=14';

// fetch data from NextBike API
const getFeatures = async () => {
  let response = await fetch(url);
  let data = await response.json();
  let places = data.countries[0].cities[0].places;

  const features = places
    .map((element) => [element.lng, element.lat])
    .map((lonLat) => {
      return new Feature({
        geometry: new Point(lonLat),
      });
    });

  return features;
};

const vectorSource = new VectorSource();

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

getFeatures().then((features) => {
  vectorSource.addFeatures(features);
});

// create costum overviewmap
var costumOverviewMapControl = new OverviewMap({
  className: 'ol-overviewmap ol-custom-overviewmap',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  collapseLabel: '\u00BB',
  label: '\u00AB',
  collapsed: true,
});

// create a new instance of OlMap in ES6 syntax
const map = new OlMap({
  layers: [LayerGroup, Buildings, vectorLayer],
  controls: defaultControls().extend([
    new FullScreen(),
    costumOverviewMapControl,
  ]),
  view: new OlView({
    center: center,
    zoom: 0.9,
    maxResolution: 7,
  }),
});

// Map Function
const Map = () => {
  return (
    <div className='App'>
      <ContextProvider>
        <ClickedBuilding map={map} />
        <DrawerComponent />
        <ControlButtons map={map} />
        <SearchComponent />
        <MapComponent map={map} />
        <FunctionalButtons map={map} />
      </ContextProvider>
    </div>
  );
};

export default Map;
