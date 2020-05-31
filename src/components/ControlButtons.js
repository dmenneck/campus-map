import React from "react";
import { ZoomSlider } from "ol/control";

import { ZoomToExtentButton, GeoLocationButton } from "@terrestris/react-geo";
import { message } from "antd";

import geolocation from "../data/img/geoLocation.png";
import home from "../data/img/haus.png";

export const ControlButtons = ({ map }) => {
  const extent1 = [608948, 6484461, 1253685, 6629060];

  const zoomslider = new ZoomSlider();
  map.addControl(zoomslider);

  const success = () => {
    message.loading("Ihre Position wird ermittelt...", 2);
  };

  const extent = [
    762864.8690265608,
    6603865.927129606,
    777214.4098265609,
    6612765.642329605,
  ];

  const zoomToExtent = () => {
    map.getView().fit(extent, map.getSize());
  };

  return (
    <>
      <button
        id="zoomToExtBtn"
        onClick={zoomToExtent}
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></button>

      <div onClick={success}>
        <GeoLocationButton
          onGeolocationChange={() => undefined}
          map={map}
          showMarker={true}
          follow={true}
          id="getlocationbtn"
          style={{
            backgroundImage: `url(${geolocation})`,
            backgroundSize: "75%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></GeoLocationButton>
      </div>
    </>
  );
};
