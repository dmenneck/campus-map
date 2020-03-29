import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { AppContext } from '../AppContext';

const DraggableTwo = ({ map }) => {
  const { value2 } = useContext(AppContext);
  const [btnAgFeatureGrid, setBtnAgFeatureGrid] = value2;

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
            <div className='handle draggableBackground'>Drag from here</div>
          </div>
        </Draggable>
      ) : null}
    </div>
  );
};

export default DraggableTwo;
