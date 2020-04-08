import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { AppContext } from '../AppContext';
import { LayerGroup } from '../LayerGroup';
import close from '../../data/img/close.png';

import { LayerTree } from '@terrestris/react-geo';

const DraggableOne = ({ map }) => {
  const { value } = useContext(AppContext);
  const [btnBackgroundLayer, setBtnBackgroundLayer] = value;

  const closeWindow = () => {
    setBtnBackgroundLayer(false);
    console.log('window closed!');
  };

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
            <div className='handle draggableBackground'>
              Grundkarten-Galerie
              <button className='btnVisible'>
                <img
                  src={close}
                  alt='close'
                  className='closeImg'
                  onClick={closeWindow}
                />
              </button>
            </div>
            <LayerTree map={map} layerGroup={LayerGroup} />
          </div>
        </Draggable>
      ) : null}
    </div>
  );
};

export default DraggableOne;