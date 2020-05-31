import React, { useState, useEffect } from "react";
import { buildings, source } from "./Layers";
import LittleMapInBuildings from "./LittleMapInBuildings";

const BuildingsTable = () => {
  const [features, setFeatures] = useState([]);
  const [isShown, setIsShown] = useState(false);
  // get features async
  useEffect(() => {
    setFeatures(source.getFeatures());
  }, []);

  useEffect(() => {
    const map = document.getElementById("little-map");

    console.log(map);
  }, []);

  const getFeatures = (e) => {
    let targetName = e.target.innerHTML;

    features.map((item) => {});

    console.log(targetName);
  };

  if (!isShown) {
    return (
      <div id="buildings-table-container">
        <LittleMapInBuildings />

        <table className="u-full-width" id="buildings-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Addresse</th>
              <th>Gebäudenummer</th>
              <th>?</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => {
              return (
                <tr key={index} onMouseEnter={getFeatures} id="body-tr">
                  <td>{item.getProperties().name} </td>
                  <td>{item.getProperties().address}</td>
                  <td>{item.getProperties().building_number}</td>
                  <td>{item.getGeometry().extent_}</td>
                  <td>?</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

export default BuildingsTable;
