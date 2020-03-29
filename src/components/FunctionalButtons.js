import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export const FunctionalButtons = ({ map }) => {
  const { value, value2 } = useContext(AppContext);
  const [btnBackgroundLayer, setBtnBackgroundLayer] = value;
  const [btnAgFeatureGrid, setBtnAgFeatureGrid] = value2;

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

  return (
    <>
      <div id='BtnWrapper'>
        <button
          onClick={toggleDraggableBackgroundLayer}
          className='BtnFunctional'
        >
          1
        </button>
        <button onClick={toggleAgFeatureGrid} className='BtnFunctional'>
          2
        </button>
        <button className='BtnFunctional'>3</button>
        <button className='BtnFunctional'>4</button>
      </div>
    </>
  );
};
