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
        layer: 'terrain'
      })
    }),
    new OlLayerTile({
      // Format: JPEG - https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer
      name: 'Satellite',
      minResolution: 0,
      maxResolution: 10,
      visible: false,
      source: new XYZ({
        attributions: [
          'Powered by Esri',
          'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
        ],
        attributionsCollapsible: false,
        url:
          'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maxZoom: 23
      })
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
          'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
      })
    })
  ]
});
