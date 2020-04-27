import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { fromLonLat } from 'ol/proj';

const CampusAreas = ({ view }) => {
  const { value9 } = useContext(AppContext);
  const [campusAreasContainer, setCampusAreasContainer] = value9;

  const bern = fromLonLat([771105.0, 6608382.0]);

  const removeContainer = () => {
    setCampusAreasContainer(false);
  };

  function flyTo(location, done) {
    var duration = 2000;
    var zoom = view.getZoom();
    var parts = 2;
    var called = false;
    function callback(complete) {
      --parts;
      if (called) {
        return;
      }
      if (parts === 0 || !complete) {
        called = true;
        done(complete);
      }
    }
    view.animate(
      {
        center: location,
        duration: duration,
      },
      callback
    );
    view.animate(
      {
        zoom: zoom - 1,
        duration: duration / 2,
      },
      {
        zoom: zoom,
        duration: duration / 2,
      },
      callback
    );
  }

  const flyToArea1 = () => {
    flyTo(bern, function () {});
  };

  if (campusAreasContainer) {
    return (
      <div id='campus-Areas-Container'>
        <div id='bereiche-title'>
          Bereiche
          <button onClick={removeContainer}>x</button>
        </div>
        <button onClick={flyToArea1}>fly</button>
      </div>
    );
  } else {
    return null;
  }
};

export default CampusAreas;
