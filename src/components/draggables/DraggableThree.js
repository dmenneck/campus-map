import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { AppContext } from '../AppContext';
import Legend from '../Legend';

import close from '../../data/img/close.png';

const DraggableThree = ({ map }) => {
  const { value3 } = useContext(AppContext);
  const [btnLegend, setBtnLegend] = value3;

  const closeWindow = () => {
    setBtnLegend(false);
    console.log('window closed!');
  };

  return (
    <div>
      {btnLegend ? (
        <Draggable
          handle='.handle'
          defaultPosition={{ x: 100, y: 150 }}
          position={null}
          scale={1}
        >
          <div id='draggable'>
            <div className='handle draggableBackground'>
              Legende
              <button className='btnVisible'>
                <img
                  src={close}
                  alt='close'
                  className='closeImg'
                  onClick={closeWindow}
                />
              </button>
            </div>
            <Legend />
          </div>
        </Draggable>
      ) : null}
    </div>
  );
};

export default DraggableThree;
