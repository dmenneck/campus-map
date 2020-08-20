import React, { useState, useContext, useEffect } from "react";
import { Button, Drawer } from "antd";

import { AppContext } from "./AppContext";

import RoomsContainer from "./RoomsContainer";

import geolocation from "../data/img/geoLocation.png";
import information from "../data/img/info.png";

const Rooms = ({ map }) => {
  const {
    value2,
    value19,
    value20,
    value21,
    value22,
    value24,
    value25,
    value26,
  } = useContext(AppContext);
  const [clickedRoom, setClickedRoom] = value20;
  const [btnClicked, setBtnClicked] = value19;
  const [roomsContainer, setRoomsContainer] = value24;
  const [clickedRoomData, setClickedRoomData] = value21;
  const [roomNames, setRoomNames] = value22;
  const [
    filteredEmployeeNamesForRooms,
    setFilteredEmployeeNamesForRooms,
  ] = value25;

  const [search, setSearch] = useState("");

  const [whichBtnClicked, setWhichBtnClicked] = value26;
  const [layerClicked, isLayerClicked] = value2;

  // get rooms layer
  const roomsOne = map.getLayers().getArray()[6];
  const roomsTwo = map.getLayers().getArray()[7];
  const roomsThree = map.getLayers().getArray()[8];
  const roomsFour = map.getLayers().getArray()[10];

  // check if building has room features. If not -> hide toggle RoomFeatures btns in the return
  let featuresOne = roomsOne.getSource().getFeatures();
  let featuresTwo = roomsTwo.getSource().getFeatures();
  let featuresThree = roomsThree.getSource().getFeatures();
  let featuresFour = roomsFour.getSource().getFeatures();

  let etageOneHasFeatures = true;
  if (featuresOne == 0) {
    etageOneHasFeatures = false;
  } else {
    etageOneHasFeatures = true;
  }

  let etageTwoHasFeatures = true;
  if (featuresTwo == 0) {
    etageTwoHasFeatures = false;
  } else {
    etageTwoHasFeatures = true;
  }

  let etageThreeHasFeatures = true;
  if (featuresThree == 0) {
    etageThreeHasFeatures = false;
  } else {
    etageThreeHasFeatures = true;
  }

  let etageFourHasFeatures = true;
  if (featuresFour == 0) {
    etageFourHasFeatures = false;
  } else {
    etageFourHasFeatures = true;
  }

  // if building has no rooms at all -> render message
  let noRooms = false;
  if (
    etageOneHasFeatures === false &&
    etageTwoHasFeatures === false &&
    etageThreeHasFeatures === false &&
    etageFourHasFeatures === false
  ) {
    noRooms = true;
  }

  const toggleRoomsOne = () => {
    let features = featuresOne.map((item) => {
      return item.getProperties();
    });
    setFilteredEmployeeNamesForRooms(features);
    setClickedRoomData(features);

    isLayerClicked(false);
    setWhichBtnClicked(1);
    setRoomsContainer(true);

    roomsTwo.setVisible(false);
    roomsThree.setVisible(false);
    roomsFour.setVisible(false);

    if (btnClicked === true) {
      setBtnClicked(false);
    } else {
      setBtnClicked(true);
    }

    if (roomsOne.getVisible() === true) {
      roomsOne.setVisible(false);
    } else {
      roomsOne.setVisible(true);
    }
  };

  const toggleRoomsTwo = () => {
    let features = featuresTwo.map((item) => {
      return item.getProperties();
    });
    setFilteredEmployeeNamesForRooms(features);
    setClickedRoomData(features);

    isLayerClicked(false);
    setWhichBtnClicked(2);
    setRoomsContainer(true);

    roomsOne.setVisible(false);
    roomsThree.setVisible(false);
    roomsFour.setVisible(false);

    if (btnClicked === true) {
      setBtnClicked(false);
    } else {
      setBtnClicked(true);
    }

    if (roomsTwo.getVisible() === true) {
      roomsTwo.setVisible(false);
    } else {
      roomsTwo.setVisible(true);
    }
  };

  const toggleRoomsThree = () => {
    let features = featuresThree.map((item) => {
      return item.getProperties();
    });
    setFilteredEmployeeNamesForRooms(features);
    setClickedRoomData(features);

    isLayerClicked(false);
    setWhichBtnClicked(3);
    setRoomsContainer(true);

    roomsOne.setVisible(false);
    roomsTwo.setVisible(false);
    roomsFour.setVisible(false);

    if (btnClicked === true) {
      setBtnClicked(false);
    } else {
      setBtnClicked(true);
    }

    if (roomsThree.getVisible() === true) {
      roomsThree.setVisible(false);
    } else {
      roomsThree.setVisible(true);
    }
  };

  const toggleRoomsFour = () => {
    let features = featuresFour.map((item) => {
      return item.getProperties();
    });
    setFilteredEmployeeNamesForRooms(features);
    setClickedRoomData(features);

    isLayerClicked(false);
    setWhichBtnClicked(4);
    setRoomsContainer(true);

    roomsOne.setVisible(false);
    roomsTwo.setVisible(false);
    roomsThree.setVisible(false);

    if (btnClicked === true) {
      setBtnClicked(false);
    } else {
      setBtnClicked(true);
    }

    if (roomsFour.getVisible() === true) {
      roomsFour.setVisible(false);
    } else {
      roomsFour.setVisible(true);
    }
  };

  let rooms_properties = [];
  if (whichBtnClicked === 1) {
    rooms_properties = featuresOne.map((item) => {
      return item.getProperties();
    });
  } else if (whichBtnClicked === 2) {
    rooms_properties = featuresTwo.map((item) => {
      return item.getProperties();
    });
  } else if (whichBtnClicked === 3) {
    rooms_properties = featuresThree.map((item) => {
      return item.getProperties();
    });
  } else if (whichBtnClicked === 4) {
    rooms_properties = featuresFour.map((item) => {
      return item.getProperties();
    });
  }

  console.log(rooms_properties);

  // for drawer left
  //useEffect(() => {
  //  setClickedRoomData(rooms_properties);
  //}, [rooms_properties.length]);

  let clickedRoomFeatures = [];
  if (whichBtnClicked === 1) {
    clickedRoomFeatures = featuresOne;
  } else if (whichBtnClicked === 2) {
    clickedRoomFeatures = featuresTwo;
  } else if (whichBtnClicked === 3) {
    clickedRoomFeatures = featuresThree;
  } else if (whichBtnClicked === 4) {
    clickedRoomFeatures = featuresFour;
  }

  // change state when Array length changes
  // useEffect(() => {
  //   setFilteredEmployeeNamesForRooms(rooms_properties);
  // }, [rooms_properties.length]);

  return (
    <div id="rooms">
      <div></div>

      <div>
        <div id="toggle-rooms-btn-container">
          <button
            onClick={toggleRoomsOne}
            className={etageOneHasFeatures ? "toggle-rooms-btn" : "hide"}
          >
            EG
          </button>
          <button
            onClick={toggleRoomsTwo}
            className={etageTwoHasFeatures ? "toggle-rooms-btn" : "hide"}
          >
            1. Etage
          </button>
          <button
            onClick={toggleRoomsThree}
            className={etageThreeHasFeatures ? "toggle-rooms-btn" : "hide"}
          >
            2. Etage
          </button>
          <button
            onClick={toggleRoomsFour}
            className={etageFourHasFeatures ? "toggle-rooms-btn" : "hide"}
          >
            3. Etage
          </button>
          <p className={noRooms ? "no-rooms" : "hide"}>
            Für dieses Gebäude liegen noch keine Rauminformationen vor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
