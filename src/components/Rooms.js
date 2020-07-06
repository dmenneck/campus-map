import React, { useState, useContext } from "react";
import { Button, Drawer } from "antd";

import { AppContext } from "./AppContext";
import Style from "ol/style/Style";
import { Fill, Stroke } from "ol/style";
import RoomsContainer from "./RoomsContainer";

import geolocation from "../data/img/geoLocation.png";
import information from "../data/img/info.png";

const Rooms = ({ map }) => {
  const { value19, value20, value21, value22 } = useContext(AppContext);
  const [clickedRoom, setClickedRoom] = value20;
  const [btnClicked, setBtnClicked] = value19;
  const [clickedRoomData, setClickedRoomData] = value21;
  const [roomNames, setRoomNames] = value22;

  const [search, setSearch] = useState("");
  const [drawerVisibility, setDrawervisibility] = useState(false);
  const [whichBtnClicked, setWhichBtnClicked] = useState();

  // get rooms layer
  const roomsOne = map.getLayers().getArray()[6];
  const roomsTwo = map.getLayers().getArray()[7];
  const roomsThree = map.getLayers().getArray()[8];

  // check if building has room features. If not -> hide toggle RoomFeatures btns in the return
  let featuresOne = roomsOne.getSource().getFeatures();
  let featuresTwo = roomsTwo.getSource().getFeatures();
  let featuresThree = roomsThree.getSource().getFeatures();

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

  // if building has no rooms at all -> render message
  let noRooms = false;
  if (
    etageOneHasFeatures === false &&
    etageTwoHasFeatures === false &&
    etageThreeHasFeatures === false
  ) {
    noRooms = true;
  }

  const toggleRoomsOne = () => {
    setWhichBtnClicked(1);

    roomsTwo.setVisible(false);
    roomsThree.setVisible(false);

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

    roomsOne.setVisible(false);
    roomsThree.setVisible(false);

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

    roomsOne.setVisible(false);
    roomsTwo.setVisible(false);

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
  }

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
  }

  const showRoomData = (e) => {
    setClickedRoomData(rooms_properties);
    setDrawervisibility(true);
    setRoomNames(e.target.innerHTML);

    if (clickedRoom) {
      setClickedRoom(false);
    } else {
      setClickedRoom(true);
    }
  };

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

  const clickedBuildingsStyle = new Style({
    stroke: new Stroke({ color: "#af111d", width: 6 }),
    fill: new Fill({ color: "red" }),
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

  const styleHoveredFeature = (e) => {
    let targetName = e.target.innerHTML;

    clickedRoomFeatures.map((item) => {
      console.log(item.getProperties().names);

      if (targetName === item.getProperties().names) {
        console.log(item);
      }
    });
  };

  return (
    <div id="rooms">
      <div></div>

      <div>
        <div id="toggle-rooms-btn-container">
          <button
            onClick={toggleRoomsOne}
            className={etageOneHasFeatures ? "toggle-rooms-btn" : "hide"}
          >
            1. Etage
          </button>
          <button
            onClick={toggleRoomsTwo}
            className={etageTwoHasFeatures ? "toggle-rooms-btn" : "hide"}
          >
            2. Etage
          </button>
          <button
            onClick={toggleRoomsThree}
            className={etageThreeHasFeatures ? "toggle-rooms-btn" : "hide"}
          >
            3. Etage
          </button>
          <p className={noRooms ? "no-rooms" : "hide"}>
            Für dieses Gebäude liegen noch keine Rauminformationen vor.
          </p>
        </div>

        <div className={btnClicked ? "rooms-input" : "hide"}>
          <input
            placeholder="Suche..."
            value={search}
            onChange={searchInput}
            id="rooms-input-search"
          />

          <button onClick={resetInput} className="rooms-input-btns">
            x
          </button>
          <button onClick={closeSearchBar} className="rooms-input-btns">
            .
          </button>
        </div>

        <div
          id="rooms-data-container"
          className={btnClicked ? "rooms-input" : "hide"}
        >
          {filteredNames.map((item, index) => (
            <div key={index} id="rooms-data-grid" className="room-data-items">
              <div
                href={item.link}
                key={index}
                title={item.names}
                className="room-numbers"
                onMouseEnter={styleHoveredFeature}
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

        <Drawer
          title="Rauminformationen"
          placement="right"
          onClose={onClose}
          visible={drawerVisibility}
          getContainer={false}
          width="600px"
        >
          <p id="room-number">Raum: {roomNumber}</p>
          <RoomsContainer />
        </Drawer>
      </div>
    </div>
  );
};

export default Rooms;
