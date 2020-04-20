import OlLayerGroup from 'ol/layer/Group';
import OlLayerTile from 'ol/layer/Tile';
import OSMSource from 'ol/source/OSM';

export const LayerGroup = new OlLayerGroup({
  name: 'Layergroup',
  layers: [
    new OlLayerTile({
      name: 'OSM',
      visible: true,
      source: new OSMSource(),
    }),
  ],
});

// import React from 'react';
// import OlLayerGroup from 'ol/layer/Group';
// import OlLayerTile from 'ol/layer/Tile';
// import OlSourceStamen from 'ol/source/Stamen';
// import XYZ from 'ol/source/XYZ';

// export const LayerGroup = new OlLayerGroup({
//   name: 'Layergroup',
//   layers: [
//     new OlLayerTile({
//       name: 'OSM',
//       visible: true,
//       source: new OlSourceStamen({
//         layer: 'terrain',
//       }),
//     }),
//   ],
// });
