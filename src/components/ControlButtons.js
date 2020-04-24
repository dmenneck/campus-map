import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { ZoomSlider } from 'ol/control';

import { ZoomToExtentButton, GeoLocationButton } from '@terrestris/react-geo';

import { EnvironmentOutlined, HomeOutlined } from '@ant-design/icons';

export const ControlButtons = ({ map }) => {
  const extent1 = [608948, 6484461, 1253685, 6629060];

  const zoomslider = new ZoomSlider();
  map.addControl(zoomslider);

  return (
    <>
      <ZoomToExtentButton
        id='zoomToExtBtn'
        map={map}
        extent={extent1}
        fitOptions={{
          duration: 3000,
          maxZoom: 10,
        }}
      >
        <HomeOutlined />
      </ZoomToExtentButton>
      <GeoLocationButton
        onGeolocationChange={() => undefined}
        map={map}
        showMarker={true}
        follow={true}
        id='getlocationbtn'
      >
        <EnvironmentOutlined />
      </GeoLocationButton>
    </>
  );
};
