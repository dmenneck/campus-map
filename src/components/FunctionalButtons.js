import React, { useContext } from 'react';
import { AppContext } from './AppContext';

import layer from '../data/img/layer.png';
import grid from '../data/img/grid.png';

import { Menu, Dropdown, Button } from 'antd';

export const FunctionalButtons = ({ map }) => {
  const { value, value2, value3, value5 } = useContext(AppContext);
  const [btnBackgroundLayer, setBtnBackgroundLayer] = value;
  const [btnAgFeatureGrid, setBtnAgFeatureGrid] = value2;
  const [btnLegend, setBtnLegend] = value3;

  const [isDrawerVisible, setIsDrawerVisible] = value5;

  const toggleDraggableBackgroundLayer = () => {
    if (btnBackgroundLayer === false) {
      setBtnBackgroundLayer(!false);
      console.log('Visible!');
    } else {
      setBtnBackgroundLayer(false);
      console.log('Not Visible!');
    }
  };

  const toggleAgFeatureGrid = () => {
    if (btnAgFeatureGrid === false) {
      setBtnAgFeatureGrid(!false);
      console.log('Visible!');
    } else {
      setBtnAgFeatureGrid(false);
      console.log('Not Visible!');
    }
  };

  const toggleLegend = () => {
    if (btnLegend === false) {
      setBtnLegend(!false);
      console.log('Visible!');
    } else {
      setBtnLegend(false);
      console.log('Not Visible!');
    }
  };

  const toggleDrawer = () => {
    if (isDrawerVisible === false) {
      setIsDrawerVisible(!false);
      console.log('Visible!');
    } else {
      setIsDrawerVisible(false);
      console.log('Not Visible!');
    }
  };

  const menuOne = (
    <Menu>
      <Menu.Item>
        <button
          onClick={toggleDraggableBackgroundLayer}
          className='BtnFunctional'
        ></button>
      </Menu.Item>
    </Menu>
  );

  const menuTwo = (
    <Menu>
      <Menu.Item>
        <button
          onClick={toggleAgFeatureGrid}
          className='BtnFunctional'
        ></button>
      </Menu.Item>
    </Menu>
  );

  const menuThree = (
    <Menu>
      <Menu.Item>
        <button onClick={toggleLegend} className='BtnFunctional'></button>
      </Menu.Item>
    </Menu>
  );

  const menuFive = (
    <Menu>
      <Menu.Item>
        <button onClick={toggleDrawer} className='BtnFunctional'></button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div id='BtnWrapper'>
        <Dropdown overlay={menuOne} placement='topCenter'>
          <Button>
            <img src={grid} alt='layer' className='layerIcon' />
          </Button>
        </Dropdown>
        <Dropdown overlay={menuTwo} placement='topCenter'>
          <Button>
            <img src={layer} alt='layer' className='layerIcon' />
          </Button>
        </Dropdown>
        <Dropdown overlay={menuThree} placement='topCenter'>
          <Button>3</Button>
        </Dropdown>

        <Dropdown overlay={menuFive} placement='topCenter'>
          <Button>5</Button>
        </Dropdown>
      </div>
    </>
  );
};
