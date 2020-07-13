import React from "react";

import OlMap from "ol/Map";
import OlView from "ol/View";
import {
  defaults as defaultControls,
  FullScreen,
  OverviewMap,
  ScaleLine,
} from "ol/control";
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
  etageThreeRooms,
  buildings,
  highlightStyle,
  clickedStyle,
  etageOneWalks,
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
import ToggleDrawerBtnMobile from "./ToggleDrawerBtnMobile";
import GeolocationMobile from "./GeolocationMobile";
import HoveredFeatures from "./HoveredFeatures";
import RoomLayerOne from "./RoomLayerOne";
import RoomLayerTwo from "./RoomLayerTwo";
import RoomLayerThree from "./RoomLayerThree";
import WalkLayerOne from "./WalkLayerOne";
import SearchEmployee from "./SearchEmployee";

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
      etageThreeRooms,
      etageOneWalks,
    ],
    controls: defaultControls().extend([
      new FullScreen(),
      costumOverviewMapControl,
    ]),
    view: view,
  });

  // check projection -> EPSG:3857
  // console.log(view.getProjection());

  // new click select interaction
  var select = new Select({
    style: clickedStyle,
  });
  map.addInteraction(select);

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

  // scaleline
  const scaleline = new ScaleLine();
  map.addControl(scaleline);

  //invisible by default (can be toggled in MenuContainer.js)
  familyCampus.setVisible(false);
  parking.setVisible(false);
  nrwWms.setVisible(false);
  osmTileLayer.setVisible(true);

  //invisible by default (can be toggled in Rooms.js)
  etageOneRooms.setVisible(false);
  etageTwoRooms.setVisible(false);
  etageThreeRooms.setVisible(false);

  // block scrolling
  document.body.classList.add("stop-scrolling");

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
          ></MeasureButton>

          <MeasureButton
            name="poly"
            map={map}
            measureType="polygon"
            id="analysis-btn-two"
          ></MeasureButton>

          <MeasureButton
            name="multi"
            map={map}
            measureType="line"
            multipleDrawing
            id="analysis-btn-three"
          ></MeasureButton>
        </div>

        <div
          id="mobile-measure-btn-container"
          className="measure-btn-container"
        >
          <MeasureButton
            name="line"
            map={map}
            measureType="line"
            id="mobile-measure-btn-one"
          ></MeasureButton>

          <MeasureButton
            name="poly"
            map={map}
            id="mobile-measure-btn-two"
          ></MeasureButton>

          <MeasureButton
            name="multi"
            map={map}
            measureType="line"
            multipleDrawing
            id="mobile-measure-btn-three"
          ></MeasureButton>
        </div>

        <SearchEmployee />
        <GeolocationMobile map={map} />
        <ToggleDrawerBtnMobile />
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
        <RoomLayerOne map={map} />
        <RoomLayerTwo map={map} />
        <RoomLayerThree map={map} />
        <WalkLayerOne map={map} />
        <HoveredFeatures map={map} />
      </ContextProvider>
    </div>
  );
};

export default Map;
