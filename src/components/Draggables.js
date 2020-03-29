import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { AppContext } from './AppContext';
import { LayerGroup } from './LayerGroup';

import { LayerTree } from '@terrestris/react-geo';

const Draggables = ({ map }) => {
  const [btnBackgroundLayer, setBtnBackgroundLayer] = useContext(AppContext);

  return (
    <div>
      {/* Draggable ONE */}
      {btnBackgroundLayer ? (
        <Draggable
          handle='.handle'
          defaultPosition={{ x: 100, y: 150 }}
          position={null}
          scale={1}
        >
          <div id='draggable'>
            <div className='handle draggableBackground'>Drag from here</div>
            <LayerTree map={map} layerGroup={LayerGroup} />
          </div>
        </Draggable>
      ) : null}
    </div>
  );
};

export default Draggables;
