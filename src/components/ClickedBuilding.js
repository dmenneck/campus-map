import React, { useContext } from 'react';
import { AppContext } from './AppContext';

// when the user clicks on a building, the state changes
function ClickedBuilding({ map }) {
  const { value6 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;

  function OnMouseMove(browserEvent) {
    var coordinate = browserEvent.coordinate;
    var pixel = map.getPixelFromCoordinate(coordinate);

    let data = map.forEachFeatureAtPixel(pixel, function (feature) {
      return feature.values_;
    });
    setclickedBuildingsInformation(data);
  }

  map.on('click', OnMouseMove);

  return <div></div>;
}

export default ClickedBuilding;
