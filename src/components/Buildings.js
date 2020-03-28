import React from 'react';

import { AgFeatureGrid } from '@terrestris/react-geo';
import OlFormatGeoJSON from 'ol/format/GeoJSON';

const Buildings = () => {
  //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
  return (
    <div>
      <h2 className='überschrift'>Gebäudeübersicht</h2>
      <h3 className='description'>
        Klicken Sie auf die gewünschte Zeile, um das ausgewählte Gebäude auf dem
        Lapeplan anzuzeigen
      </h3>

      <div id='container-table'></div>
    </div>
  );
};

export default Buildings;
