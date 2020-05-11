import React from 'react';

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

import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import { LayerGroup } from './LayerGroup';

import { buildings, parking, familyCampus, entrances } from './Layers';
import { ControlButtons } from './ControlButtons';

import { ContextProvider } from './AppContext';
import DrawerComponent from './Drawer';
import ClickedBuilding from './ClickedBuilding';
import SearchComponent from './Search';
import FetchNextBikeApi from './FetchNextBikeApi';
import MenuContainer from './MenuContainer';
import { SearchBuildingContainer } from './SearchBuildingContainer';
import ToggleMenuContainerBtn from './ToggleMenuContainerBtn';
import CampusAreas from './CampusAreas';
import Legend from './Legend';
import EntranceLegend from './EntranceLegende';

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { getPointResolution } from 'ol/proj';

// global variables
const center = [771105.02, 6608382.01]; //Cologne

// create costum overviewmap
const costumOverviewMapControl = new OverviewMap({
  className: 'ol-overviewmap ol-custom-overviewmap',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  collapsed: true,
});

// create a new instance of OlMap in ES6 syntax
const Map = () => {
  const view = new OlView({
    center: center,
    zoom: 1.8,
    maxResolution: 10,
  });

  const map = new OlMap({
    layers: [LayerGroup, buildings, parking, entrances, familyCampus],
    controls: defaultControls().extend([
      new FullScreen(),
      costumOverviewMapControl,
    ]),
    view: view,
  });

  // unvisible by default (can be toggled in MenuContainer.js)
  familyCampus.setVisible(false);
  entrances.setVisible(false);
  parking.setVisible(false);

  // adding point to map
  const iconFeature = new Feature({
    geometry: new Point([771105.02, 6608382.01]),
    name: 'Island',
  });

  var vectorSource = new VectorSource({
    features: [iconFeature],
  });

  var vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  map.addLayer(vectorLayer);

  // try fetching -> TRY WITH USEEFFECT HOOK!!!
  // const url = 'https://api.nextbike.net/maps/nextbike-live.json?city=14';

  // const getFeatures = async () => {
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   let places = data.countries[0].cities[0].places;

  //   const features = places
  //     .map((element) => [element.lng, element.lat])
  //     .map((lonLat) => {
  //       return new Feature({
  //         geometry: new Point(lonLat),
  //       });
  //     });

  //   return features;
  // };

  // const vectorSource = new VectorSource();

  // const vectorLayer = new VectorLayer({
  //   source: vectorSource,
  // });

  // getFeatures().then((features) => {
  //   vectorSource.addFeatures(features);
  // });

  // map.addLayer(vectorLayer);

  // return function
  return (
    <div className='App'>
      <ContextProvider>
        <EntranceLegend />
        <Legend />
        <CampusAreas map={map} />
        <ToggleMenuContainerBtn />
        <SearchBuildingContainer map={map} />
        <MenuContainer map={map} />
        <FetchNextBikeApi map={map} />
        <ClickedBuilding map={map} />
        <DrawerComponent />
        <ControlButtons map={map} />
        <SearchComponent />
        <MapComponent map={map} />
      </ContextProvider>
    </div>
  );
};

export default Map;
