import React, { useEffect } from "react";

import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style } from "ol/style";
import OlStyleIcon from "ol/style/Icon";

import kvbIcon from "../data/img/kvb.png";

const FetchNextBike = ({ map }) => {
  const url = "https://api.nextbike.net/maps/nextbike-live.json?city=14";

  const src = "EPSG:4326";
  const dest = "EPSG:3857";

  const bikeStyle = new Style({
    image: new OlStyleIcon({
      scale: 0.15,
      src: kvbIcon,
    }),
  });

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

      features.map((feature) => {
        feature.getGeometry().transform(src, dest);
      });

      return features;
    };

    const source = new VectorSource();

    const bikeLayer = new VectorLayer({
      source: source,
      style: bikeStyle,
    });

    getFeatures().then((features) => {
      source.addFeatures(features);
    });

    // unvisible per default - can be toggled within MenuContainer.js
    bikeLayer.setVisible(false);

    map.addLayer(bikeLayer);
  }, []);

  return null;
};

export default FetchNextBike;
