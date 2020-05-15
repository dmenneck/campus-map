import React from "react";
import { ZoomSlider } from "ol/control";

import { ZoomToExtentButton, GeoLocationButton } from "@terrestris/react-geo";
import { message } from "antd";

import geolocation from "../data/img/geoLocation.png";

export const ControlButtons = ({ map }) => {
  const extent1 = [608948, 6484461, 1253685, 6629060];

  const zoomslider = new ZoomSlider();
  map.addControl(zoomslider);

  const success = () => {
    message.loading("Ihre Position wird ermittelt...", 2);
  };

  return (
    <>
      <ZoomToExtentButton
        id="zoomToExtBtn"
        map={map}
        extent={extent1}
        fitOptions={{
          duration: 3000,
          maxZoom: 10,
        }}
      ></ZoomToExtentButton>
      <div onClick={success}>
        <GeoLocationButton
          onGeolocationChange={() => undefined}
          map={map}
          showMarker={true}
          follow={true}
          id="getlocationbtn"
          style={{
            backgroundImage: `url(${geolocation})`,
            backgroundSize: "cover",
            width: "50px",
            height: "auto",
          }}
        ></GeoLocationButton>
      </div>
    </>
  );
};
