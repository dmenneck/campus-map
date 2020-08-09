import React, { useState, useContext } from "react";
import { Drawer, Button } from "antd";
import { AppContext } from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import RoomsContainer from "./RoomsContainer";

import Style from "ol/style/Style";
import { Fill, Stroke } from "ol/style";

import geolocation from "../data/img/geoLocation.png";
import information from "../data/img/info.png";

import {
  etageOneRooms,
  etageTwoRooms,
  etageThreeRooms,
  etageFourRooms,
} from "./Layers";

const DisplayRoomsContainer = ({ map }) => {
  const { value24, value25, value21, value19, value22, value26 } = useContext(
    AppContext
  );

  const [roomsContainer, setRoomsContainer] = value24;
  const [clickedRoomData, setClickedRoomData] = value21;
  const [btnClicked, setBtnClicked] = value19;
  const [
    filteredEmployeeNamesForRooms,
    setFilteredEmployeeNamesForRooms,
  ] = value25;
  const [roomNames, setRoomNames] = value22;
  const [whichBtnClicked, setWhichBtnClicked] = value26;

  const [drawerVisibility, setDrawervisibility] = useState(false);

  const roomOne_layer_features = map
    .getLayers()
    .getArray()[6]
    .getSource()
    .getFeatures();

  const roomTwo_layer_features = map
    .getLayers()
    .getArray()[7]
    .getSource()
    .getFeatures();

  const roomThree_layer_features = map
    .getLayers()
    .getArray()[8]
    .getSource()
    .getFeatures();

  let clickedRoomFeatures = [];
  if (whichBtnClicked === 1) {
    clickedRoomFeatures = roomOne_layer_features;
  } else if (whichBtnClicked === 2) {
    clickedRoomFeatures = roomTwo_layer_features;
  } else if (whichBtnClicked === 3) {
    clickedRoomFeatures = roomThree_layer_features;
  }

  let etageClicked = "";
  if (whichBtnClicked === 1) {
    etageClicked = "Erdgeschoss";
  } else if (whichBtnClicked === 2) {
    etageClicked = "1. Etage";
  } else if (whichBtnClicked === 3) {
    etageClicked = "2. Etage";
  } else if (whichBtnClicked === 4) {
    etageClicked = "3. Etage";
  }

  const onClose = () => {
    setDrawervisibility(false);
  };

  const onCloseTwo = () => {
    setDrawervisibility(false);
  };

  const showDrawer = () => {
    setRoomsContainer(true);
  };

  let clickedRoomInfo = clickedRoomData.filter((item) => {
    return item.names === roomNames;
  });

  let roomNumber = "";
  clickedRoomInfo.map((item) => {
    roomNumber = item.room_num;
  });

  const showRoomData = (e) => {
    setDrawervisibility(true);
    setRoomNames(e.target.innerHTML);
  };

  const clickedBuildingsStyle = new Style({
    stroke: new Stroke({ color: "#af111d", width: 6 }),
  });

  const getExtent = (e) => {
    let targetName = e.target.innerHTML;

    let mappedFeatures = clickedRoomFeatures.map((item) => {
      if (targetName === item.get("names")) {
        map.getView().fit(item.getGeometry(), map.getSize());

        // clear style of previous clicked building
        item.setStyle(null);
        // setStyle of currently clicked building
        item.setStyle(clickedBuildingsStyle);
        // clear style after 3s
        setTimeout(() => {
          item.setStyle(null);
        }, 1500);
      }
    });
  };

  let allLayerNotVisible = false;

  if (
    etageOneRooms.getVisible() === false &&
    etageTwoRooms.getVisible() === false &&
    etageThreeRooms.getVisible() === false &&
    etageFourRooms.getVisible() === false
  ) {
    allLayerNotVisible = true;
  }

  let onlyRoomsWithEmployees = filteredEmployeeNamesForRooms.map((item) => {
    if (item.names !== "-") {
      return item;
    }
  });

  let onlyRoomsWithEmployeesUndefindedRemoved = onlyRoomsWithEmployees.filter(
    (item) => {
      return item !== undefined;
    }
  );

  if (roomsContainer) {
    return (
      <div>
        <div id={allLayerNotVisible ? "hide" : "rooms-data-list"}>
          <Drawer
            placement="bottom"
            closable={false}
            onClose={onClose}
            visible={allLayerNotVisible ? false : roomsContainer}
            getContainer={false}
            style={{ position: "absolute" }}
            height={allLayerNotVisible ? "0" : "200"}
          >
            <div id="rooms-data-list-header">Südbau - {etageClicked}</div>
            <div
              id="rooms-data-container"
              className={btnClicked ? "rooms-input" : "hide"}
            >
              {onlyRoomsWithEmployeesUndefindedRemoved.map((item, index) => (
                <div
                  key={index}
                  id="rooms-data-grid"
                  className="room-data-items"
                >
                  <div
                    href={item.link}
                    key={index}
                    title={item.names}
                    className="room-numbers"
                  >
                    Raum {item.room_num}
                  </div>
                  <div>
                    <button
                      onClick={showRoomData}
                      className="hide-content"
                      style={{
                        backgroundImage: `url(${information})`,
                        backgroundSize: "75%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        display: "inline",
                      }}
                    >
                      {/* next line is being ignored. Code still needs do be there otherwise doesnt work*/}
                      {item.names}
                    </button>
                    <button
                      onClick={getExtent}
                      className="hide-content"
                      style={{
                        backgroundImage: `url(${geolocation})`,
                        backgroundSize: "75%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        display: "inline",
                      }}
                    >
                      {/* next line is being ignored. Code still needs do be there otherwise doesnt work*/}
                      {item.names}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Drawer>
        </div>

        <Drawer
          title="Rauminformationen"
          placement="right"
          onClose={onCloseTwo}
          visible={drawerVisibility}
          getContainer={false}
          width="600px"
        >
          <p id="room-number">Raum: {roomNumber}</p>
          <RoomsContainer />
        </Drawer>
      </div>
    );
  } else {
    return null;
  }
};

export default DisplayRoomsContainer;
