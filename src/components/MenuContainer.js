import React, { useContext } from 'react';
import { Menu } from 'antd';
import { LayerTree } from '@terrestris/react-geo';
import { LayerGroup } from './LayerGroup';
import { Buildings } from './Layers';
import { AppContext } from './AppContext';
import {
  AppstoreOutlined,
  BarsOutlined,
  SearchOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import buildingsLogo from '../data/img/buildings.png';

const { SubMenu } = Menu;

export default function MenuContainer({ map }) {
  const { value4, value5, value7, value8, value9 } = useContext(AppContext);
  const [isDrawerVisible, setIsDrawerVisible] = value5;
  const [searchBuildingVisibility, setSearchBuildingVisibility] = value4;
  const [searchBarVisibility, setSearchBarVisibility] = value7;
  const [menuContainerVisibility, setMenuContainerVisibility] = value8;
  const [campusAreasContainer, setCampusAreasContainer] = value9;

  const toggleBuildingsLayerVisibility = () => {
    if (Buildings.getVisible() === true) {
      Buildings.setVisible(false);
    } else {
      Buildings.setVisible(true);
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

  if (menuContainerVisibility) {
    return (
      <div>
        <Menu style={{ width: 256 }} mode='inline' id='menu-Container'>
          <SubMenu
            key='sub1'
            title={
              <span>
                <AppstoreOutlined />
                <span className='menu-container-title'>Hintergrundkarten</span>
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
                <span className='menu-container-title'>Layer</span>
              </span>
            }
          >
            <Menu.Item key='2'>
              <button
                onClick={toggleBuildingsLayerVisibility}
                id='buildings-visibil-btn'
                style={{
                  backgroundImage: `url(${buildingsLogo})`,
                  backgroundSize: 'cover',
                }}
              ></button>
              <button
                onClick={toggleBuildingsLayerVisibility}
                id='buildings-visibil-btn'
                style={{
                  backgroundImage: `url(${buildingsLogo})`,
                  backgroundSize: 'cover',
                }}
              ></button>
              <button
                onClick={toggleBuildingsLayerVisibility}
                id='buildings-visibil-btn'
                style={{
                  backgroundImage: `url(${buildingsLogo})`,
                  backgroundSize: 'cover',
                }}
              ></button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key='sub3'
            title={
              <span>
                <SearchOutlined />
                <span className='menu-container-title'>Suche</span>
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
            <span onClick={toggleCampusAreas} className='menu-container-title'>
              Bereiche
            </span>
          </Menu.Item>

          <Menu.Item key='5'>
            <InfoCircleOutlined />
            <span onClick={toggleDrawer} className='menu-container-title'>
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
