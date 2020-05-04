import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { AppContext } from './AppContext';
import { fromLonLat } from 'ol/proj';
import { ZoomToExtentButton } from '@terrestris/react-geo';

const CampusAreas = ({ map }) => {
  const { value9 } = useContext(AppContext);
  const [campusAreasContainer, setCampusAreasContainer] = value9;

  const removeContainer = () => {
    setCampusAreasContainer(false);
  };

  const getExtent = () => {
    console.log(map.getView().calculateExtent());
  };

  const extent1 = [770617, 660744, 772881, 660875];

  if (campusAreasContainer) {
    return (
      <Draggable>
        <div id='campus-Areas-Container'>
          <div id='bereiche-title'>
            Bereiche
            <button id='close-data-container-btn' onClick={removeContainer}>
              x
            </button>
          </div>
          <button onClick={getExtent}>klick</button>
          <ZoomToExtentButton map={map} extent={extent1} />
        </div>
      </Draggable>
    );
  } else {
    return null;
  }
};

export default CampusAreas;
