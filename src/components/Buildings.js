import React from 'react';

import { AgFeatureGrid } from '@terrestris/react-geo';
import OlFormatGeoJSON from 'ol/format/GeoJSON';

// page: Gebäudeuntersicht

const Buildings = () => {
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
