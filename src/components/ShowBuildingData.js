import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import Rooms from "./Rooms";

import { Card, Drawer, Button, Divider } from "antd";

const ShowBuildingData = ({ map }) => {
  const { value6, value2 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;
  const [layerClicked, isLayerClicked] = value2;
  const [drawerVisibility, setDrawervisibility] = useState(false);

  // get attributes out of the clicked buildings informations stored in the state
  let name = clickedBuildingsInformation.name;
  let barrier_free = clickedBuildingsInformation.barrier_free_entrance;
  let address = clickedBuildingsInformation.address;
  let building_number = clickedBuildingsInformation.building_number;
  let type = clickedBuildingsInformation.type;
  let image = clickedBuildingsInformation.image;

  let barrier_free_entrance = "";

  if (barrier_free) {
    barrier_free_entrance = "vorhanden";
  } else {
    barrier_free_entrance = "nicht vorhanden";
  }

  let facilitiesName = clickedBuildingsInformation.facilities_name;
  let facilitiesLink = clickedBuildingsInformation.facilities_hyperlink;

  // initiate nameArr & linkArr to use it within tab2
  let nameArr;
  if (facilitiesName) {
    nameArr = facilitiesName.split(",");
  } else {
    return null;
  }

  let linkArr;
  if (facilitiesLink) {
    linkArr = facilitiesLink.split(",");
  } else {
    return null;
  }

  let nameAndLink = [];
  for (let i = 0; i < nameArr.length; i++) {
    nameAndLink.push({
      name: nameArr[i],
      link: linkArr[i],
    });
  }

  // convert type (language) to german
  let typeText = "";
  if (type === "university") {
    typeText = "Universität";
  } else if (type === "clinic") {
    typeText = "Klinik";
  } else if (type === "sharedFlat") {
    typeText = "Wohngemeinschaft";
  } else {
    typeText = "";
  }

  // check if feature has facilities and render the open drawer button (Einrichtungen) based on true/false
  let hasFacilities = false;
  if (facilitiesName === "-") {
    hasFacilities = true;
  }

  //check if attribute has an image. If not -> set logo (noImage) as image
  let noImage;
  if (image === null) {
    noImage = "https://www.lernfox.de/wp-content/uploads/Uni-Koeln-Logo.png";
  }

  const showDrawer = () => {
    setDrawervisibility(true);
  };

  const onClose = () => {
    setDrawervisibility(false);
  };

  const closeDataContainer = () => {
    isLayerClicked(false);
  };

  if (layerClicked) {
    return (
      <div>
        <div className="clicked-data-container">
          <div
            className="pos-relative-for-drawer"
            id={drawerVisibility ? "stop-scrolling" : null}
          >
            <div id="clicked-data-container-header">
              <p id="building-number">Gebäude {building_number}</p>
              <button
                id="close-data-container-btn"
                onClick={closeDataContainer}
              >
                x
              </button>
            </div>

            <img
              className="data-container-img"
              alt=""
              style={{
                backgroundImage: `url(${image ? image : noImage})`,
                backgroundSize: "cover",
              }}
            />
            <div className="clicked-data-container-text">
              <p className="buildingType">{typeText}</p>
              <p className="buildingInformations buildingInformationsName">
                {name}
              </p>
              <p className="buildingInformations building-address">{address}</p>
              <div className="separator unselectable">
                Barrierefreier Eingang
              </div>
              <p
                className="buildingInformations barrier-free-entrance-text"
                id={
                  barrier_free_entrance === "vorhanden"
                    ? "barrier-free-green"
                    : "barrier-free-red"
                }
              >
                {barrier_free_entrance}
              </p>
              <div className="separator unselectable">Räume</div>
              <div>
                <Rooms map={map} />
              </div>
              <div className="separator unselectable">Einrichtungen</div>
              <button
                ghost
                onClick={showDrawer}
                id={
                  drawerVisibility || hasFacilities ? "hide" : "open-drawer-btn"
                }
              >
                Zu den Einrichtungen
              </button>

              <p id={!hasFacilities ? "hide" : "no-facilities"}>
                Für dieses Gebäude liegen noch keine Einrichtungsinformationen
                vor.
              </p>
              <Drawer
                title="Einrichtungen"
                placement="right"
                onClose={onClose}
                visible={drawerVisibility}
                getContainer={false}
                style={{ position: "absolute" }}
                width="100%"
              >
                <>
                  <div id="building-data-drawer-header">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c7/SiegelUniK%C3%B6ln.svg"
                      alt="Siegel der Uni Koeln"
                      id="siegelUni"
                    />
                    <div id="drawer-text">
                      <p id="tabTwoAdress">Gebäude {building_number}:</p>
                      <p id="tabTwoName">{name}</p>
                    </div>
                  </div>
                  <div id="buildingDataLinkContainer">
                    {nameAndLink.map((item, index) => (
                      <a
                        href={item.link}
                        className="buildingDataLink"
                        key={index}
                        target="_blank"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ShowBuildingData;
