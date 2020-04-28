import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const EntranceLegende = () => {
  const { value2 } = useContext(AppContext);
  const [layerClicked, isLayerClicked] = value2;

  if (layerClicked) {
    return (
      <div id='entrance-legend'>
        <p className='entrance-legend-text'>Eingänge</p>
        <p className='entrance-legend-text'>rollstuhlgerecht</p>
      </div>
    );
  } else {
    return null;
  }
};

export default EntranceLegende;
