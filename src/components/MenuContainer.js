import React, { useContext, useState } from 'react';
import { Menu } from 'antd';
import { LayerTree } from '@terrestris/react-geo';
import { LayerGroup } from './LayerGroup';
import { buildings, parking, familyCampus } from './Layers';
import { AppContext } from './AppContext';
import {
  AppstoreOutlined,
  BarsOutlined,
  SearchOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

import buildingsLogo from '../data/img/buildings.png'; // import pic into word and go to "Grafik formatieren" -> "Bild" -> Sättigung = 10%, Transparenz = 60%
import buildingsLogoOff from '../data/img/buildingsOff.png';
import parkingLogo from '../data/img/parkenUni.png';
import wickelraum from '../data/img/wickelraum.png';

const { SubMenu } = Menu;

export default function MenuContainer({ map }) {
  const { value4, value5, value7, value8, value9, value10 } = useContext(
    AppContext
  );
  const [isDrawerVisible, setIsDrawerVisible] = value5;
  const [searchBuildingVisibility, setSearchBuildingVisibility] = value4;
  const [searchBarVisibility, setSearchBarVisibility] = value7;
  const [menuContainerVisibility, setMenuContainerVisibility] = value8;
  const [campusAreasContainer, setCampusAreasContainer] = value9;
  const [legendeVisibility, setLegendeVisibilty] = value10;
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
    } else {
      familyCampus.setVisible(true);
      setFamilyCampusVisibility(true);
    }
  };

  const toggleParkingLayerVisibility = () => {
    if (parking.getVisible() === true) {
      parking.setVisible(false);
      setParkingVisibility(false);
    } else {
      parking.setVisible(true);
      setParkingVisibility(true);
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
    }
  };

  const toggleLegende = () => {
    setLegendeVisibilty(true);
  };

  if (menuContainerVisibility) {
    return (
      <div>
        <Menu style={{ width: 256 }} mode='inline' id='menu-Container'>
          <SubMenu
            key='sub1'
            title={
              <span>
                <AppstoreOutlined />
                <span className='menu-container-title unselectable'>
                  Hintergrundkarten
                </span>
              </span>
            }
          >
            <Menu.Item key='1'>
              <LayerTree map={map} layerGroup={LayerGroup} />
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key='sub2'
            title={
              <span>
                <BarsOutlined />
                <span className='menu-container-title unselectable'>Layer</span>
              </span>
            }
          >
            <Menu.Item key='2'>
              <button
                onClick={toggleBuildingsLayerVisibility}
                className='buildings-visibil-btn'
                style={{
                  backgroundImage: `url(${buildingsLogo})`,
                  backgroundSize: 'cover',
                  opacity: buildingsVisibility ? '1' : '0.4',
                }}
              >
                buildings
              </button>

              <button
                onClick={toggleParkingLayerVisibility}
                className='buildings-visibil-btn'
                style={{
                  backgroundImage: `url(${parkingLogo})`,
                  backgroundSize: 'cover',
                  opacity: parkingVisibility ? '1' : '0.4',
                }}
              >
                parking
              </button>
              <button
                onClick={toggleFamilyCampusLayerVisibility}
                className='buildings-visibil-btn'
                style={{
                  backgroundImage: `url(${wickelraum})`,
                  backgroundSize: 'cover',
                  opacity: familyCampusVisibility ? '1' : '0.4',
                }}
              >
                familyCampus
              </button>
              <button onClick={toggleLegende} className='buildings-visibil-btn'>
                Legende
              </button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key='sub3'
            title={
              <span>
                <SearchOutlined />
                <span className='menu-container-title unselectable'>Suche</span>
              </span>
            }
          >
            <Menu.Item key='3'>
              <button onClick={toggleSearchBuildingsVisibility}>Toggle</button>
              <button onClick={toggleSearchbar}>Suchleiste</button>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key='4'>
            <InfoCircleOutlined />
            <span
              onClick={toggleCampusAreas}
              className='menu-container-title unselectable'
            >
              Bereiche
            </span>
          </Menu.Item>

          <Menu.Item key='5'>
            <InfoCircleOutlined />
            <span
              onClick={toggleDrawer}
              className='menu-container-title unselectable'
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
