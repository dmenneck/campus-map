import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import OlVector from "ol/layer/Vector";
import OlVectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { Style, Fill, Stroke } from "ol/style";
import OlLayerTile from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS";
import OSMSource from "ol/source/OSM";
import OlStyleIcon from "ol/style/Icon";

import buildingsData from "../data/geoData/uniBuildings.geojson";
import parkingData from "../data/geoData/parking.geojson";
import familyCampusData from "../data/geoData/familyCampus.geojson";

import parkenÖffentlich from "../data/img/parkenÖffentlich.png";
import parkenUni from "../data/img/parkenUni.png";
import parkenKlinik from "../data/img/parkenKlinik.png";
import wickelraum from "../data/img/wickelraum.png";
import stillraum from "../data/img/stillraum.png";
import elternKindRaum from "../data/img/elternKindRaum.png";
import kita from "../data/img/kita.png";
import spielplatz from "../data/img/spielplatz.png";
import unisex from "../data/img/unisex.png";
import bluedot from "../data/img/blued.png";
import orangedot from "../data/img/oranged.png";

// map tiles (nrwWms & osmTileLayer)
export const nrwWms = new OlLayerTile({
  source: new TileWMS({
    url: "https://www.wms.nrw.de/geobasis/wms_nw_dop",
    params: { LAYERS: "nw_dop_rgb" },
  }),
});

export const osmTileLayer = new OlLayerTile({
  name: "OSM",
  visible: true,
  source: new OSMSource(),
});

let entrancesStyle1 = "";
let entrancesStyle2 = "";

export const EntranceLayer = ({ map }) => {
  const { value6, value2 } = useContext(AppContext);
  const [layerClicked, isLayerClicked] = value2;
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;

  let featureNum = clickedBuildingsInformation.building_number;

  if (layerClicked) {
    entrances.setVisible(true);
  } else {
    entrances.setVisible(false);
  }

  // entrance layer styles:
  entrancesStyle1 = new Style({
    image: new OlStyleIcon({
      scale: 0.05,
      src: bluedot,
    }),
  });

  entrancesStyle2 = new Style({
    image: new OlStyleIcon({
      scale: 0.05,
      src: orangedot,
    }),
  });

  return null;
};

const entranceStyleFunction = (feature, resolution) => {
  const entranceType = feature.get("entr_type");
  const build_num = feature.get("build_num");

  if (entranceType === "entrance") {
    return entrancesStyle1;
  } else {
    return entrancesStyle2;
  }
};

// create entrances layer -> if clickedBuilding ID === entrances feature.get("id") -> return style
export const entrances_source = new OlVectorSource();
//{
//  url: entrancesData,
//  format: new GeoJSON(),
//}

export const entrances = new OlVector({
  source: entrances_source,
  style: entranceStyleFunction,
});

// Building layer style
export const highlightStyle = new Style({
  fill: new Fill({ color: "#e3e8eb" }),
  stroke: new Stroke({ color: "rgba(73, 139, 170, 0.9)", width: 1 }),
});

export const clickedStyle = new Style({
  fill: new Fill({ color: "rgba(227, 232, 235, 0.5)" }),
  stroke: new Stroke({ color: "rgba(73, 139, 170, 0.9)", width: 2 }),
});

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
      width: 1.8,
    }),
    fill: new Fill({
      color: "#4a657d",
    }),
  }),
});

export const etageOneRooms = new OlVector({
  source: new OlVectorSource(),
  style: new Style({
    fill: new Fill({
      color: "grey",
    }),
    stroke: new Stroke({
      color: "black",
      width: 1.2,
    }),
  }),
});

export const etageTwoRooms = new OlVector({
  source: new OlVectorSource(),
  style: new Style({
    fill: new Fill({
      color: "grey",
    }),
    stroke: new Stroke({
      color: "black",
      width: 1.2,
    }),
  }),
});

export const etageThreeRooms = new OlVector({
  source: new OlVectorSource(),
  style: new Style({
    fill: new Fill({
      color: "grey",
    }),
    stroke: new Stroke({
      color: "black",
      width: 1.2,
    }),
  }),
});

export const etageFourRooms = new OlVector({
  source: new OlVectorSource(),
  style: new Style({
    fill: new Fill({
      color: "grey",
    }),
    stroke: new Stroke({
      color: "black",
      width: 1.2,
    }),
  }),
});

export const etageOneWalks = new OlVector({
  source: new OlVectorSource(),
  style: new Style({
    stroke: new Stroke({
      color: "red",
      width: 1.2,
    }),
  }),
});

export const etageTwoWalks = new OlVector({
  source: new OlVectorSource(),
});

export const etageThreeWalks = new OlVector({
  source: new OlVectorSource(),
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
