import React, { useEffect } from "react";

import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

const FetchNextBike = ({ map }) => {
  const url = "https://api.nextbike.net/maps/nextbike-live.json?city=14";

  useEffect(() => {
    const getFeatures = async () => {
      let response = await fetch(url);
      let data = await response.json();
      let places = data.countries[0].cities[0].places;

      const features = places
        .map((element) => [element.lng, element.lat])
        .map((lonLat) => {
          return new Feature({
            geometry: new Point(lonLat),
          });
        });

      return features;
    };

    const source = new VectorSource();

    const bikeLayer = new VectorLayer({
      source: source,
    });

    getFeatures().then((features) => {
      source.addFeatures(features);
    });

    console.log(bikeLayer);

    map.addLayer(bikeLayer);
  }, []);

  return null;
};

export default FetchNextBike;
