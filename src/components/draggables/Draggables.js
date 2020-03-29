import React, { useContext } from 'react';
import DraggableOne from './DraggableOne';
import DraggableTwo from './DraggableTwo';
import { AppContext } from '../AppContext';

const Draggables = ({ map }) => {
  const { value, value2 } = useContext(AppContext);
  const [btnBackgroundLayer, setBtnBackgroundLayer] = value;
  const [btnAgFeatureGrid, setBtnAgFeatureGrid] = value2;

  return (
    <div>
      <DraggableOne map={map} />
      <DraggableTwo map={map} />
    </div>
  );
};

export default Draggables;
