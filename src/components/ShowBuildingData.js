import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";

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

  // check if feature has facilities and render the open drawer button (Einrichtungen) based on true/false
  let hasFacilities = false;
  if (facilitiesName === "-") {
    hasFacilities = true;
  }

  //check if attribute has an image. If not -> set logo (noImage) as image
  let noImage;
  if (image === null) {
    noImage =
      "https://upload.wikimedia.org/wikipedia/de/thumb/f/fe/SiegelUniKoeln.svg/1200px-SiegelUniKoeln.svg.png";
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

  if (drawerVisibility) {
    console.log("open");
  } else {
    console.log("closed");
  }

  if (layerClicked) {
    return (
      <div>
        <div className="clicked-data-container">
          <div
            className="pos-relative-for-drawer"
            id={drawerVisibility ? "stop-scrolling" : null}
          >
            <div id="clicked-data-container-header">
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
              <p id="building-number">Gebäude {building_number}:</p>
              <p className="buildingInformations buildingInformationsName">
                {name}
              </p>
              <p className="buildingInformations">{address}</p>
              <p className="buildingInformations barrier-free-entrance-text">
                Barrierefreier Eingang: {barrier_free_entrance}
              </p>

              <Button
                ghost
                onClick={showDrawer}
                id={
                  drawerVisibility || hasFacilities ? "hide" : "open-drawer-btn"
                }
              >
                Einrichtungen
              </Button>

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
                      src="https://upload.wikimedia.org/wikipedia/de/thumb/f/fe/SiegelUniKoeln.svg/1200px-SiegelUniKoeln.svg.png"
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
