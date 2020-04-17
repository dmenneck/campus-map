import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { ZoomSlider } from 'ol/control';

import { ZoomToExtentButton, GeoLocationButton } from '@terrestris/react-geo';

import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';

export const ControlButtons = ({ map }) => {
  const { value1 } = useContext(AppContext);
  const [areFunctionalBtnsVisible, setFunctionalBtnsVisibility] = value1;

  const extent1 = [608948, 6484461, 1253685, 6629060];

  const changeVisibility = () => {
    if (areFunctionalBtnsVisible) {
      setFunctionalBtnsVisibility(!true);
    } else {
      setFunctionalBtnsVisibility(!false);
    }
  };

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
      ></ZoomToExtentButton>
      <GeoLocationButton
        onGeolocationChange={() => undefined}
        map={map}
        showMarker={true}
        follow={true}
        id='getlocationbtn'
      ></GeoLocationButton>
      <button className='openFnctButtons' onClick={changeVisibility}>
        {areFunctionalBtnsVisible ? (
          <FullscreenExitOutlined />
        ) : (
          <FullscreenOutlined />
        )}
      </button>
    </>
  );
};
