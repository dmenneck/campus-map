import React from 'react';

import { ZoomToExtentButton, GeoLocationButton } from '@terrestris/react-geo';

import haus from '../data/img/haus.jpg';
import geoLocation from '../data/img/geoLocation.png';

export const ControlButtons = ({ map }) => {
  // An array of numbers representing an extent: [minx, miny, maxx, maxy].

  const extent1 = [608948, 6484461, 1253685, 6629060];

  return (
    <>
      <ZoomToExtentButton
        id='zoomToExtBtn'
        map={map}
        extent={extent1}
        fitOptions={{
          duration: 3000,
          maxZoom: 10
        }}
      >
        <img
          src={haus}
          alt='full extend'
          style={{ width: '30px', heigth: 'auto' }}
        ></img>
      </ZoomToExtentButton>

      <GeoLocationButton
        onGeolocationChange={() => undefined}
        map={map}
        showMarker={true}
        follow={true}
        id='getlocationbtn'
      >
        <img
          src={geoLocation}
          alt='get Location'
          style={{ width: '30px', heigth: 'auto' }}
        ></img>
      </GeoLocationButton>
    </>
  );
};
