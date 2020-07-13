# Campus Map - University of Cologne

based on react-geo, OpenLayers and GeoServer

## Todos

- get raumpläne/fluchtpläne from buildings
- display WalkLayerOne
- Legende anders positionieren
- Gebäudeliste und Mitarbeiterliste fertig stellen

## additional informations

- due to "problems" with the context api not all layers could initially be created within the Layers.js component.
  Could be fixed by putting the provider one stage up (app.js or index.js).

## Geodata

### Attributes

entrances

- entrance = entrance, not barrier free
- barrierfree = entrance, barrierfree
