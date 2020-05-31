import React, { useContext, useState, useEffect } from "react";
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
import tableIcon from "../data/img/tableIcon.png";
import searchIcon from "../data/img/suche.png";
import bicycleIcon from "../data/img/bicycleIcon.png";

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
  const [osmTileVisibility, setOsmTileVisibility] = useState(true);
  const [nrwWmsVisibility, setNrwWmsVisibility] = useState(false);
  const [gridBtnOpacity, setGridBtnOpacity] = useState(false);
  const [searchbarBtnOpacity, setSearchbarBtnOpacity] = useState(true);
  const [bikeLayer, setBikeLayer] = useState("");
  const [bikeLayerVisibility, setBikeLayerVisibility] = useState(false);

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
      setGridBtnOpacity(false);
    } else {
      setSearchBuildingVisibility(true);
      setGridBtnOpacity(true);
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
      setSearchbarBtnOpacity(false);
    } else {
      setSearchBarVisibility(true);
      setSearchbarBtnOpacity(true);
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
      setOsmTileVisibility(false);
    } else {
      osmTileLayer.setVisible(true);
      setOsmTileVisibility(true);
    }
  };

  const toggleNrwWmsVisibility = () => {
    if (nrwWms.getVisible() === true) {
      nrwWms.setVisible(false);
      setNrwWmsVisibility(false);
    } else {
      nrwWms.setVisible(true);
      setNrwWmsVisibility(true);
    }
  };

  useEffect(() => {
    // get the bikeLayer
    const bikeLayerFromMap = map.getLayers().array_[11];

    // use
    setBikeLayer(bikeLayerFromMap);
  }, []);

  const toggleBikeLayerVisiblity = () => {
    if (bikeLayerVisibility) {
      setBikeLayerVisibility(false);
      bikeLayer.setVisible(false);
    } else {
      setBikeLayerVisibility(true);
      bikeLayer.setVisible(true);
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
                  opacity: osmTileVisibility ? "1" : "0.2",
                }}
                title="Open Street Map"
              ></button>
              <button
                onClick={toggleNrwWmsVisibility}
                className="toggle-basemap-btns"
                style={{
                  backgroundImage: `url(${tilewms})`,
                  backgroundSize: "cover",
                  opacity: nrwWmsVisibility ? "1" : "0.4",
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
                  opacity: buildingsVisibility ? "1" : "0.2",
                }}
                title="Gebäude"
              ></button>
              <button
                onClick={toggleParkingLayerVisibility}
                className="buildings-visibil-btn"
                style={{
                  backgroundImage: `url(${parkingLogo})`,
                  backgroundSize: "cover",
                  opacity: parkingVisibility ? "1" : "0.2",
                }}
                title="Parken"
              ></button>
              <button
                onClick={toggleFamilyCampusLayerVisibility}
                className="buildings-visibil-btn"
                style={{
                  backgroundImage: `url(${wickelraum})`,
                  backgroundSize: "cover",
                  opacity: familyCampusVisibility ? "1" : "0.2",
                }}
                title="Familien-Campus"
              ></button>

              <Divider orientation="left" plain="true" className="unselectable">
                Externe Daten
              </Divider>
              <button
                className="buildings-visibil-btn"
                title="KvB-Räder"
                style={{
                  backgroundImage: `url(${bicycleIcon})`,
                  backgroundSize: "cover",
                  opacity: bikeLayerVisibility ? "1" : "0.2",
                }}
                onClick={toggleBikeLayerVisiblity}
              ></button>
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
                style={{
                  backgroundImage: `url(${tableIcon})`,
                  backgroundSize: "cover",
                  opacity: gridBtnOpacity ? "1" : "0.2",
                }}
              ></button>
              <button
                onClick={toggleSearchbar}
                className="unselectable menu-search-btn"
                style={{
                  backgroundImage: `url(${searchIcon})`,
                  backgroundSize: "cover",
                  opacity: searchbarBtnOpacity ? "1" : "0.2",
                }}
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
