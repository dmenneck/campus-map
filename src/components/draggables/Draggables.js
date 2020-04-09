import React from 'react';
import DraggableOne from './DraggableOne';
import DraggableTwo from './DraggableTwo';
import DraggableThree from './DraggableThree';

const Draggables = ({ map }) => {
  return (
    <div>
      <DraggableOne map={map} />
      <DraggableTwo map={map} />
      <DraggableThree map={map} />
    </div>
  );
};

export default Draggables;
