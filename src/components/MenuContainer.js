import React, { useContext, useState } from "react";
import { Menu, Divider } from "antd";
import { LayerTree } from "@terrestris/react-geo";

import {
  buildings,
  parking,
  familyCampus,
  nrwWms,
  osmTileLayer,
} from "./Layers";
import { AppContext } from "./AppContext";
import {
  AppstoreOutlined,
  BarsOutlined,
  SearchOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import buildingsLogo from "../data/img/buildings.png";
import parkingLogo from "../data/img/parkenUni.png";
import wickelraum from "../data/img/wickelraum.png";
import osmsource from "../data/img/osmsource.PNG";
import tilewms from "../data/img/tilewms.PNG";

const { SubMenu } = Menu;

export default function MenuContainer({ map }) {
  const {
    value4,
    value5,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
  } = useContext(AppContext);
  const [isDrawerVisible, setIsDrawerVisible] = value5;
  const [searchBuildingVisibility, setSearchBuildingVisibility] = value4;
  const [searchBarVisibility, setSearchBarVisibility] = value7;
  const [menuContainerVisibility, setMenuContainerVisibility] = value8;
  const [campusAreasContainer, setCampusAreasContainer] = value9;
  const [legendeVisibility, setLegendeVisibilty] = value10;
  const [parkingLegendeVisibility, setParkingLegendeVisibility] = value11;
  const [
    familyCampusLegendeVisibility,
    setFamilyCampusLegendeVisibility,
  ] = value12;

  const [buildingsVisibility, setBuildingsVisibility] = useState(true);
  const [familyCampusVisibility, setFamilyCampusVisibility] = useState(false);
  const [parkingVisibility, setParkingVisibility] = useState(false);

  const toggleBuildingsLayerVisibility = () => {
    if (buildings.getVisible() === true) {
      buildings.setVisible(false);
      setBuildingsVisibility(false);
    } else {
      buildings.setVisible(true);
      setBuildingsVisibility(true);
    }
  };

  const toggleFamilyCampusLayerVisibility = () => {
    if (familyCampus.getVisible() === true) {
      familyCampus.setVisible(false);
      setFamilyCampusVisibility(false);
      setFamilyCampusLegendeVisibility(false);
    } else {
      familyCampus.setVisible(true);
      setFamilyCampusVisibility(true);
      setFamilyCampusLegendeVisibility(true);
      setCampusAreasContainer(false);
      setParkingLegendeVisibility(false);
    }
  };

  const toggleParkingLayerVisibility = () => {
    if (parking.getVisible() === true) {
      parking.setVisible(false);
      setParkingVisibility(false);
      setParkingLegendeVisibility(false);
    } else {
      parking.setVisible(true);
      setParkingVisibility(true);
      setParkingLegendeVisibility(true);
      setCampusAreasContainer(false);
      setFamilyCampusLegendeVisibility(false);
    }
  };

  const toggleSearchBuildingsVisibility = () => {
    if (searchBuildingVisibility) {
      setSearchBuildingVisibility(false);
    } else {
      setSearchBuildingVisibility(true);
    }
  };

  const toggleDrawer = () => {
    if (isDrawerVisible) {
      setIsDrawerVisible(false);
    } else {
      setIsDrawerVisible(true);
    }
  };

  const toggleSearchbar = () => {
    if (searchBarVisibility) {
      setSearchBarVisibility(false);
    } else {
      setSearchBarVisibility(true);
    }
  };

  const toggleCampusAreas = () => {
    if (campusAreasContainer) {
      setCampusAreasContainer(false);
    } else {
      setCampusAreasContainer(true);
      setFamilyCampusLegendeVisibility(false);
      setParkingLegendeVisibility(false);
    }
  };

  const toggleOsmTileVisibility = () => {
    if (osmTileLayer.getVisible() === true) {
      osmTileLayer.setVisible(false);
    } else {
      osmTileLayer.setVisible(true);
    }
  };

  const toggleNrwWmsVisibility = () => {
    if (nrwWms.getVisible() === true) {
      nrwWms.setVisible(false);
    } else {
      nrwWms.setVisible(true);
    }
  };

  if (menuContainerVisibility) {
    return (
      <div>
        <Menu style={{ width: 256 }} mode="inline" id="menu-Container">
          <SubMenu
            key="sub1"
            title={
              <span>
                <AppstoreOutlined />
                <span className="menu-container-title unselectable">
                  Hintergrundkarten
                </span>
              </span>
            }
          >
            <Menu.Item key="1">
              <button
                onClick={toggleOsmTileVisibility}
                className="toggle-basemap-btns"
                style={{
                  backgroundImage: `url(${osmsource})`,
                  backgroundSize: "cover",
                  opacity: buildingsVisibility ? "1" : "0.4",
                }}
                title="Open Street Map"
              ></button>
              <button
                onClick={toggleNrwWmsVisibility}
                className="toggle-basemap-btns"
                style={{
                  backgroundImage: `url(${tilewms})`,
                  backgroundSize: "cover",
                  opacity: buildingsVisibility ? "1" : "0.4",
                }}
                title="Geobasis WMS"
              ></button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span>
                <BarsOutlined />
                <span className="menu-container-title unselectable">Layer</span>
              </span>
            }
          >
            <Menu.Item key="2" id="menu-item-two">
              <Divider orientation="left" plain="true" className="unselectable">
                Campus Daten
              </Divider>
              <button
                onClick={toggleBuildingsLayerVisibility}
                className="buildings-visibil-btn"
                style={{
                  backgroundImage: `url(${buildingsLogo})`,
                  backgroundSize: "cover",
                  opacity: buildingsVisibility ? "1" : "0.4",
                }}
                title="Gebäude"
              ></button>
              <button
                onClick={toggleParkingLayerVisibility}
                className="buildings-visibil-btn"
                style={{
                  backgroundImage: `url(${parkingLogo})`,
                  backgroundSize: "cover",
                  opacity: parkingVisibility ? "1" : "0.4",
                }}
                title="Parken"
              ></button>
              <button
                onClick={toggleFamilyCampusLayerVisibility}
                className="buildings-visibil-btn"
                style={{
                  backgroundImage: `url(${wickelraum})`,
                  backgroundSize: "cover",
                  opacity: familyCampusVisibility ? "1" : "0.4",
                }}
                title="Familien-Campus"
              ></button>

              <Divider orientation="left" plain="true" className="unselectable">
                Externe Daten
              </Divider>
              <button
                className="buildings-visibil-btn"
                title="KvB-Räder"
              ></button>
              <button className="buildings-visibil-btn"></button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub3"
            title={
              <span>
                <SearchOutlined />
                <span className="menu-container-title unselectable">Suche</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <button
                onClick={toggleSearchBuildingsVisibility}
                className="unselectable menu-search-btn"
              ></button>
              <button
                onClick={toggleSearchbar}
                className="unselectable menu-search-btn"
              ></button>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="4" id="menu-item-four">
            <InfoCircleOutlined />
            <span
              onClick={toggleCampusAreas}
              className="menu-container-title unselectable"
            >
              Bereiche
            </span>
          </Menu.Item>

          <Menu.Item key="5" id="menu-item-five">
            <InfoCircleOutlined />
            <span
              onClick={toggleDrawer}
              className="menu-container-title unselectable"
            >
              Weitere Informationen
            </span>
          </Menu.Item>
        </Menu>
      </div>
    );
  } else {
    return null;
  }
}
