import React, { useState } from "react";

const HoveredFeatures = ({ map }) => {
  const [features, setFeatures] = useState([]);
  let properties = "";

  function OnMouseMove(e) {
    var coordinate = e.coordinate;
    var pixel = map.getPixelFromCoordinate(coordinate);

    let dataValues = map.forEachFeatureAtPixel(pixel, function (feature) {
      //setFeatures(feature.getProperties());
    });

    // console.log(properties); hier funktioniert es
  }

  // console.log(properties); hier funktioniert es nicht!

  map.on("pointermove", OnMouseMove);

  return null;
  //(
  // <div id="hovered-feature-img-container">
  // <img src={properties} id="hovered-feature-img" />
  // </div>
  // );
};

export default HoveredFeatures;
