import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { AppContext } from '../AppContext';
import close from '../../data/img/close.png';

let url = 'https://api.nextbike.net/maps/nextbike-live.json?city=14';

async function getNextBikeData() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data;
}

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
              Layer
              <button className='btnVisible'>
                <img
                  src={close}
                  alt='close'
                  className='closeImg'
                  onClick={closeWindow}
                />
              </button>
            </div>
            <button onClick={getNextBikeData}>Klick mich</button>
          </div>
        </Draggable>
      ) : null}
    </div>
  );
};

export default DraggableTwo;
