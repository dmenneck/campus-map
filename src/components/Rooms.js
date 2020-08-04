import React, { useState, useContext, useEffect } from "react";
import { Button, Drawer } from "antd";

import { AppContext } from "./AppContext";

import RoomsContainer from "./RoomsContainer";

import geolocation from "../data/img/geoLocation.png";
import information from "../data/img/info.png";

const Rooms = ({ map }) => {
  const {
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
  const [drawerVisibility, setDrawervisibility] = useState(false);
  const [whichBtnClicked, setWhichBtnClicked] = value26;

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

  const closeSearchBar = () => {
    setBtnClicked(false);
  };

  const searchInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const resetInput = () => {
    setSearch("");
  };

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

  const roomFour_layer_features = map
    .getLayers()
    .getArray()[10]
    .getSource()
    .getFeatures();

  let rooms_properties = [];
  if (whichBtnClicked === 1) {
    rooms_properties = roomOne_layer_features.map((item) => {
      return item.getProperties();
    });
  } else if (whichBtnClicked === 2) {
    rooms_properties = roomTwo_layer_features.map((item) => {
      return item.getProperties();
    });
  } else if (whichBtnClicked === 3) {
    rooms_properties = roomThree_layer_features.map((item) => {
      return item.getProperties();
    });
  } else if (whichBtnClicked === 4) {
    rooms_properties = roomFour_layer_features.map((item) => {
      return item.getProperties();
    });
  }

  useEffect(() => {
    setClickedRoomData(rooms_properties);
  }, [rooms_properties.length]);

  let filteredNames = rooms_properties.filter((name) => {
    return name.names.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
  });

  let clickedRoomFeatures = [];
  if (whichBtnClicked === 1) {
    clickedRoomFeatures = roomOne_layer_features;
  } else if (whichBtnClicked === 2) {
    clickedRoomFeatures = roomTwo_layer_features;
  } else if (whichBtnClicked === 3) {
    clickedRoomFeatures = roomThree_layer_features;
  } else if (whichBtnClicked === 4) {
    clickedRoomFeatures = roomFour_layer_features;
  }

  let clickedRoomInfo = clickedRoomData.filter((item) => {
    return item.names === roomNames;
  });

  let roomNumber = "";
  clickedRoomInfo.map((item) => {
    roomNumber = item.room_num;
  });

  const onClose = () => {
    setDrawervisibility(false);
  };

  const styleHoveredFeature = (e) => {
    let targetName = e.target.innerHTML;

    clickedRoomFeatures.map((item) => {
      if (targetName === item.getProperties().names) {
        console.log(item);
      }
    });
  };

  // change state when Array length changes
  useEffect(() => {
    setFilteredEmployeeNamesForRooms(filteredNames);
  }, [filteredNames.length]);

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

        <div className={btnClicked ? "rooms-input" : "hide"}>
          <input
            placeholder="Suche MitarbeiterIn..."
            value={search}
            onChange={searchInput}
            id="rooms-input-search"
          />

          <button onClick={resetInput} className="rooms-input-btns">
            {`<`}
          </button>
          <button onClick={closeSearchBar} className="rooms-input-btns">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
