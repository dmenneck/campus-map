import React, { useContext } from 'react';
import DraggableOne from './DraggableOne';
import DraggableTwo from './DraggableTwo';
import DraggableThree from './DraggableThree';
import DraggableFour from './DraggableFour';
import { AppContext } from '../AppContext';

const Draggables = ({ map }) => {
  const { value, value2, value3, value4 } = useContext(AppContext);
  const [btnBackgroundLayer, setBtnBackgroundLayer] = value;
  const [btnAgFeatureGrid, setBtnAgFeatureGrid] = value2;
  const [btnLegend, setBtnLegend] = value3;
  const [btnInfo, setBtnInfo] = value4;

  return (
    <div>
      <DraggableOne map={map} />
      <DraggableTwo map={map} />
      <DraggableThree map={map} />
      <DraggableFour map={map} />
    </div>
  );
};

export default Draggables;
