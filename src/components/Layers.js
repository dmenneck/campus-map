import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import OlVector from "ol/layer/Vector";
import OlVectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { Style, Fill, Stroke } from "ol/style";

import buildingsData from "../data/geoData/uniBuildings.geojson";
import parkingData from "../data/geoData/parking.geojson";
import familyCampusData from "../data/geoData/familyCampus.geojson";
import etageOneRoomsData from "../data/geoData/EtageEinsRäume.geojson";
import etageTwoRoomsData from "../data/geoData/EtageZweiRäume.geojson";
import roomsGängeData from "../data/geoData/EtageEinsGang.geojson";
import entrancesData from "../data/geoData/entrances.geojson";

import parkenÖffentlich from "../data/img/parkenÖffentlich.png";
import parkenUni from "../data/img/parkenUni.png";
import parkenKlinik from "../data/img/parkenKlinik.png";
import wickelraum from "../data/img/wickelraum.png";
import stillraum from "../data/img/stillraum.png";
import elternKindRaum from "../data/img/elternKindRaum.png";
import kita from "../data/img/kita.png";
import spielplatz from "../data/img/spielplatz.png";
import unisex from "../data/img/unisex.png";
import barrierfreeEntrance from "../data/img/barrierefreierEingang.jpeg";
import bluedot from "../data/img/bluedot.PNG";
import orangedot from "../data/img/orangedot.PNG";

import OlStyleIcon from "ol/style/Icon";
import { mappify } from "@terrestris/react-geo";

export const EntranceLayer = ({ map }) => {
  const { value2 } = useContext(AppContext);
  const [layerClicked, isLayerClicked] = value2;

  if (layerClicked) {
    entrances.setVisible(true);
  } else {
    entrances.setVisible(false);
  }

  return null;
};

// create Buildings layer
export const source = new OlVectorSource({
  url: buildingsData,
  format: new GeoJSON(),
});

export const buildings = new OlVector({
  source: source,
  style: new Style({
    stroke: new Stroke({
      color: "black",
      width: 1.2,
    }),
    fill: new Fill({
      color: "#4a657d",
    }),
  }),
});

// entrance layer styles:
const entrancesStyle1 = new Style({
  image: new OlStyleIcon({
    scale: 0.1,
    src: bluedot,
  }),
});

const entrancesStyle2 = new Style({
  image: new OlStyleIcon({
    scale: 0.1,
    src: orangedot,
  }),
});

// create entrances layer -> if clickedBuilding ID === entrances feature.get("id") -> return style
export const entrances = new OlVector({
  source: new OlVectorSource({
    url: entrancesData,
    format: new GeoJSON(),
  }),
  style: function (feature, resolution) {
    const entranceType = feature.get("entr_type");
    if (entranceType === "entrance") {
      return entrancesStyle1;
    } else {
      return entrancesStyle2;
    }
  },
});

export const etageOneRooms = new OlVector({
  source: new OlVectorSource({
    url: etageOneRoomsData,
    format: new GeoJSON(),
  }),
  style: new Style({
    fill: new Fill({
      color: "grey",
    }),
    stroke: new Stroke({
      color: "black",
      width: 1.2,
    }),
  }),
  maxResolution: 0.3999999,
});

export const etageTwoRooms = new OlVector({
  source: new OlVectorSource({
    url: etageTwoRoomsData,
    format: new GeoJSON(),
  }),
  style: new Style({
    fill: new Fill({
      color: "grey",
    }),
    stroke: new Stroke({
      color: "black",
      width: 1.2,
    }),
  }),
  maxResolution: 0.3999999,
});

export const roomsGänge = new OlVector({
  source: new OlVectorSource({
    url: roomsGängeData,
    format: new GeoJSON(),
  }),
  style: new Style({
    fill: new Fill({
      color: "grey",
    }),
    stroke: new Stroke({
      color: "red",
      width: 5,
    }),
  }),
  maxResolution: 0.3999999,
});

// parking styles
const parkingStyle1 = new Style({
  image: new OlStyleIcon({
    scale: 1,
    src: parkenÖffentlich,
  }),
});

const parkingStyle2 = new Style({
  image: new OlStyleIcon({
    scale: 1,
    src: parkenUni,
  }),
});

const parkingStyle3 = new Style({
  image: new OlStyleIcon({
    scale: 1,
    src: parkenKlinik,
  }),
});

export const parking = new OlVector({
  source: new OlVectorSource({
    url: parkingData,
    format: new GeoJSON(),
  }),
  style: function (feature, resolution) {
    const type = feature.get("type");
    if (type === "public") {
      return parkingStyle1;
    } else if (type === "private") {
      return parkingStyle2;
    } else {
      return parkingStyle3;
    }
  },
});

// family campus styles (fCStyles)
const fCStyle1 = new Style({
  image: new OlStyleIcon({
    scale: 1,
    src: spielplatz,
  }),
});

const fCStyle2 = new Style({
  image: new OlStyleIcon({
    scale: 1,
    src: wickelraum,
  }),
});

const fCStyle3 = new Style({
  image: new OlStyleIcon({
    scale: 1,
    src: stillraum,
  }),
});

const fCStyle4 = new Style({
  image: new OlStyleIcon({
    scale: 1,
    src: elternKindRaum,
  }),
});

const fCStyle5 = new Style({
  image: new OlStyleIcon({
    scale: 1,
    src: kita,
  }),
});

const fCStyle6 = new Style({
  image: new OlStyleIcon({
    scale: 1,
    src: unisex,
  }),
});

// create familyCampus layer
export const familyCampus = new OlVector({
  source: new OlVectorSource({
    url: familyCampusData,
    format: new GeoJSON(),
  }),
  style: function (feature, resolution) {
    const type = feature.get("type");
    if (type === "playground") {
      return fCStyle1;
    } else if (type === "parentsChildRoom") {
      return fCStyle4;
    } else if (type === "changingRoom") {
      return fCStyle2;
    } else if (type === "unisexToilet") {
      return fCStyle6;
    } else if (type === "nursingRoom") {
      return fCStyle3;
    } else {
      return fCStyle5;
    }
  },
  minResolution: 0.4,
});
