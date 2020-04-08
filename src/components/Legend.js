import React, { useState } from 'react';
import url from '../data/geoData/uniBuildings.geojson';

const Legend = () => {
  const [link, setLink] = useState();

  async function showData() {
    const response = await fetch(url);
    const data = await response.json();
    const links = data.features[0].properties.name;
    console.log(links);
    // const splittedLinks = links.split(',');
    // const individualLinks = splittedLinks.map((link, index) => (
    //   <li key={index}>{link}</li>
    // ));
    // setLink(individualLinks);
  }
  return (
    <div>
      Input kommt von Legend.js
      <button onClick={showData}>Klick</button>
      {link}
    </div>
  );
};

export default Legend;
