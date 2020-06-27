# Campus Map - University of Cologne

based on react-geo, OpenLayers and GeoServer

Todos:

- nur ein Item pro Panel
- hover over feature -> show img of building
- mobile search wie bei google maps -> div deckt den ganzen Bildschirm
- ag feature grid von gebäudeübersicht in die Map übernehmen

## additional informations

- due to "problems" with the context api not all layers could initially be created within the Layers.js component.
  Could be fixed by putting the provider one stage up (app.js or index.js).

## Geodata

### Attributes

entrances

- entrance = entrance, not barrier free
- barrierfree = entrance, barrierfree
