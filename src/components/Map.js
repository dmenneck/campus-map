import React from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import { defaults as defaultControls, FullScreen } from 'ol/control';

import '../App.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
import { MapComponent } from '@terrestris/react-geo';

import { LayerGroup } from './LayerGroup';
import { vector } from './Layers';
import { Buttons } from './Buttons';

const center = [771105.02, 6608382.01]; //Cologne

// create a new instance of OlMap in ES6 syntax
const map = new OlMap({
  controls: defaultControls().extend([new FullScreen()]),
  view: new OlView({
    center: center,
    zoom: 0.9,
    maxResolution: 7
  }),
  layers: [LayerGroup]
});

// add Layers to map

// Map Function
const Map = () => {
  return (
    <div className='App'>
      <Buttons map={map} />
      <MapComponent map={map} />
    </div>
  );
};

export default Map;
