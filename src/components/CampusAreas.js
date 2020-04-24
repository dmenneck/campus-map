import React, { useState } from 'react';

const CampusAreas = () => {
  const [container, closeContainer] = useState(true);

  const removeContainer = () => {
    closeContainer(false);
  };

  if (container) {
    return (
      <div id='campus-Areas-Container'>
        <div id='bereiche-title'>
          Bereiche
          <button onClick={removeContainer}>x</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CampusAreas;
