import React from "react";

import OlMap from "ol/Map";
import OlView from "ol/View";
import {
  defaults as defaultControls,
  FullScreen,
  OverviewMap,
} from "ol/control";
import OlVector from "ol/layer/Vector";
import OlVectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { Style, Fill, Stroke } from "ol/style";
import Select from "ol/interaction/Select";
import { pointerMove } from "ol/events/condition";

import "../App.css";
import "ol/ol.css";
import "antd/dist/antd.css";
import { MapComponent, MeasureButton } from "@terrestris/react-geo";

import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

import {
  osmTileLayer,
  nrwWms,
  parking,
  familyCampus,
  entrances,
  etageOneRooms,
  etageTwoRooms,
  roomsGänge,
  buildings,
  highlightStyle,
} from "./Layers";

import { EntranceLayer } from "./Layers";
import { ControlButtons } from "./ControlButtons";

import { ContextProvider } from "./AppContext";
import DrawerComponent from "./Drawer";
import ClickedBuilding from "./ClickedBuilding";
import SearchComponent from "./Search";
import FetchNextBikeApi from "./FetchNextBikeApi";
import MenuContainer from "./MenuContainer";
import { SearchBuildingContainer } from "./SearchBuildingContainer";
import ToggleMenuContainerBtn from "./ToggleMenuContainerBtn";
import CampusAreas from "./CampusAreas";
import Legend from "./Legend";
import EntranceLegende from "./EntranceLegende";
import AnalysisFunctionsContainer from "./AnalysisFunctionsContainer";

import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import distanceBtnOne from "../data/img/distanceBtnOne.PNG";
import distanceBtnTwo from "../data/img/distanceBtnTwo.PNG";
import distanceBtnThree from "../data/img/distanceBtnThree.PNG";

// global variables
const center = [771105.02, 6608382.01]; //Cologne

// create costum overviewmap
const costumOverviewMapControl = new OverviewMap({
  className: "ol-overviewmap ol-custom-overviewmap",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  collapsed: true,
});

// create a new instance of OlMap in ES6 syntax
const Map = () => {
  const view = new OlView({
    center: center,
    zoom: 1.8,
    maxResolution: 14,
  });

  const map = new OlMap({
    layers: [
      nrwWms,
      osmTileLayer,
      buildings,
      parking,
      entrances,
      familyCampus,
      etageOneRooms,
      etageTwoRooms,
      roomsGänge,
    ],
    controls: defaultControls().extend([
      new FullScreen(),
      costumOverviewMapControl,
    ]),
    view: view,
  });

  // check projection -> EPSG:3857
  // console.log(view.getProjection());

  // change style of clicked feature
  // select interaction working on "singleclick"
  const selectSingleClick = new Select({
    style: new Style({
      stroke: new Stroke({ color: "black", width: 2 }),
      fill: new Fill({ color: "#253746" }),
    }),
  });

  const addClickInteraction = () => {
    map.addInteraction(selectSingleClick);
  };

  addClickInteraction();

  // change style of hovered feature
  // select interaction working on "pointermove"
  const selectPointerMove = new Select({
    condition: pointerMove,
    style: highlightStyle,
  });

  const addHoverInteraction = () => {
    map.addInteraction(selectPointerMove);
  };

  addHoverInteraction();

  //invisible by default (can be toggled in MenuContainer.js)
  familyCampus.setVisible(false);
  parking.setVisible(false);
  nrwWms.setVisible(false);
  osmTileLayer.setVisible(true);

  return (
    <div className="App">
      <ContextProvider>
        {/* tried to keep the MeasureButtons in a seperate Component, but there they didn't functioned as expected. However, after debugging i came to the conclusion to just keep them here */}
        <div id="measure-btn-container" className="measure-btn-container">
          <MeasureButton
            name="line"
            map={map}
            measureType="line"
            id="analysis-btn-one"
            style={{
              backgroundImage: `url(${distanceBtnOne})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></MeasureButton>

          <MeasureButton
            name="poly"
            map={map}
            measureType="polygon"
            id="analysis-btn-two"
            style={{
              backgroundImage: `url(${distanceBtnTwo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></MeasureButton>

          <MeasureButton
            name="multi"
            map={map}
            measureType="line"
            multipleDrawing
            id="analysis-btn-three"
            style={{
              backgroundImage: `url(${distanceBtnThree})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></MeasureButton>
        </div>

        <AnalysisFunctionsContainer map={map} />
        <EntranceLayer map={map} />
        <EntranceLegende map={map} />
        <Legend />
        <CampusAreas map={map} />
        <ToggleMenuContainerBtn />
        <SearchBuildingContainer map={map} />
        <FetchNextBikeApi map={map} />
        <MenuContainer map={map} />

        <ClickedBuilding map={map} />
        <DrawerComponent />
        <ControlButtons map={map} />
        <SearchComponent map={map} />
        <MapComponent map={map} />
      </ContextProvider>
    </div>
  );
};

export default Map;
