import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { AppContext } from '../AppContext';

import close from '../../data/img/close.png';

const DraggableFour = ({ map }) => {
  const { value4 } = useContext(AppContext);
  const [btnInfo, setBtnInfo] = value4;

  const closeWindow = () => {
    setBtnInfo(false);
    console.log('window closed!');
  };

  return (
    <div>
      {/* Draggable ONE */}
      {btnInfo ? (
        <Draggable
          handle='.handle'
          defaultPosition={{ x: 100, y: 150 }}
          position={null}
          scale={1}
        >
          <div id='draggable'>
            <div className='handle draggableBackground'>
              Infos
              <button className='btnVisible'>
                <img
                  src={close}
                  alt='close'
                  className='closeImg'
                  onClick={closeWindow}
                />
              </button>
            </div>
          </div>
        </Draggable>
      ) : null}
    </div>
  );
};

export default DraggableFour;
