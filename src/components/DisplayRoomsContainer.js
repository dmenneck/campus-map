import React, { useState, useContext } from "react";
import { Drawer, Button } from "antd";
import { AppContext } from "./AppContext";

import RoomsContainer from "./RoomsContainer";

import geolocation from "../data/img/geoLocation.png";
import information from "../data/img/info.png";

const DisplayRoomsContainer = () => {
  const { value24, value25, value21, value19, value22 } = useContext(
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

  const [drawerVisibility, setDrawervisibility] = useState(false);

  const onClose = () => {
    setDrawervisibility(false);
  };

  const onCloseTwo = () => {
    setDrawervisibility(false);
  };

  const showDrawer = () => {
    setRoomsContainer(true);
  };

  console.log(clickedRoomData);

  let clickedRoomInfo = clickedRoomData.filter((item) => {
    return item.names === roomNames;
  });

  console.log(clickedRoomInfo);

  let roomNumber = "";
  clickedRoomInfo.map((item) => {
    roomNumber = item.room_num;
  });

  const showRoomData = (e) => {
    setDrawervisibility(true);
    setRoomNames(e.target.innerHTML);
  };

  if (roomsContainer) {
    return (
      <div>
        <div id="rooms-data-list">
          <Drawer
            placement="bottom"
            closable={false}
            onClose={onClose}
            visible={roomsContainer}
            getContainer={false}
            style={{ position: "absolute" }}
            height="200"
          >
            <div
              id="rooms-data-container"
              className={btnClicked ? "rooms-input" : "hide"}
            >
              {filteredEmployeeNamesForRooms.map((item, index) => (
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
