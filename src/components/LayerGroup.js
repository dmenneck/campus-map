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
