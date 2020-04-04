import React, { useContext } from 'react';
import { AppContext } from './AppContext';

import layer from '../data/img/layer.png';
import grid from '../data/img/grid.png';

export const FunctionalButtons = ({ map }) => {
  const { value, value2, value3, value4, value5 } = useContext(AppContext);
  const [btnBackgroundLayer, setBtnBackgroundLayer] = value;
  const [btnAgFeatureGrid, setBtnAgFeatureGrid] = value2;
  const [btnLegend, setBtnLegend] = value3;
  const [btnInfo, setBtnInfo] = value4;
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

  const toggleLayerInfo = () => {
    if (btnInfo === false) {
      setBtnInfo(!false);
      console.log('Visible!');
    } else {
      setBtnInfo(false);
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

  return (
    <>
      <div id='BtnWrapper'>
        <button
          onClick={toggleDraggableBackgroundLayer}
          className='BtnFunctional'
        >
          <img src={grid} alt='layer' className='layerIcon' />
        </button>
        <button onClick={toggleAgFeatureGrid} className='BtnFunctional'>
          <img src={layer} alt='layer' className='layerIcon' />
        </button>
        <button onClick={toggleLegend} className='BtnFunctional'>
          3
        </button>
        <button onClick={toggleLayerInfo} className='BtnFunctional'>
          4
        </button>
        <button onClick={toggleDrawer} className='BtnFunctional'>
          5
        </button>
      </div>
    </>
  );
};
