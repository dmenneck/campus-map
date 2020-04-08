import React from 'react';
import OlLayerGroup from 'ol/layer/Group';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceStamen from 'ol/source/Stamen';
import XYZ from 'ol/source/XYZ';

export const LayerGroup = new OlLayerGroup({
  name: 'Layergroup',
  layers: [
    new OlLayerTile({
      name: 'OSM',
      visible: false,
      source: new OlSourceStamen({
        layer: 'terrain',
      }),
    }),
    new OlLayerTile({
      // Format: JPEG - https://services.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer
      name: 'Esri',
      source: new XYZ({
        attributions:
          'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
        url:
          'https://server.arcgisonline.com/ArcGIS/rest/services/' +
          'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      }),
    }),
  ],
});
