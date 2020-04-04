import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { AppContext } from '../AppContext';
import close from '../../data/img/close.png';

const DraggableTwo = ({ map }) => {
  const { value2 } = useContext(AppContext);
  const [btnAgFeatureGrid, setBtnAgFeatureGrid] = value2;

  const closeWindow = () => {
    setBtnAgFeatureGrid(false);
    console.log('window closed!');
  };

  return (
    <div>
      {/* Draggable ONE */}
      {btnAgFeatureGrid ? (
        <Draggable
          handle='.handle'
          defaultPosition={{ x: 100, y: 150 }}
          position={null}
          scale={1}
        >
          <div id='draggable'>
            <div className='handle draggableBackground'>
              AG Feature Grid
              <button>
                <button className='btnVisible'>
                  <img
                    src={close}
                    alt='close'
                    className='closeImg'
                    onClick={closeWindow}
                  />
                </button>
              </button>
            </div>
          </div>
        </Draggable>
      ) : null}
    </div>
  );
};

export default DraggableTwo;
