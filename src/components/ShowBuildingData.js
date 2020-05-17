import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import Draggable from "react-draggable";

import { Card, Drawer, Button } from "antd";

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

  if (layerClicked) {
    return (
      <div>
        <Draggable>
          <div id="clicked-data-container">
            <div id="pos-relative-for-drawer">
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
                <p className="buildingInformations" id="building-number">
                  Gebäude {building_number}:
                </p>
                <p className="buildingInformations">{name}</p>
                <p className="buildingInformations">{address}</p>

                <Button
                  ghost
                  onClick={showDrawer}
                  id={drawerVisibility ? "hide" : "open-drawer-btn"}
                >
                  Einrichtungen
                </Button>

                <Drawer
                  title="Einrichtungen "
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
        </Draggable>
      </div>
    );
  } else {
    return null;
  }
};

export default ShowBuildingData;
