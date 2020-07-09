import React, { useState, useEffect } from "react";

import { buildings } from "./Layers";

const Buildings = ({ map }) => {
  const [features, setFeatures] = useState([]);
  const [clickedFeature, setClickedFeature] = useState();
  const [mapVisibile, setIsMapVisible] = useState(false);
  const [dataDivVisible, setDataDivVisible] = useState(true);

  // getFeatures after first render (after performing the DOM updates) and after every update (same as "mounting" and "updating")
  useEffect(() => {
    setFeatures(buildings.getSource().getFeatures());
  }, []);

  let sortedFeatures = features.map((item) => {
    return item.getProperties().name;
  });

  console.log(sortedFeatures);

  return (
    <div>
      <div id="buildings-table-container">
        <table className="u-full-width" id="buildings-table">
          <thead>
            <tr id="thead">
              <th className="sticky">Name</th>
              <th className="sticky">Addresse</th>
              <th className="sticky">Gebäudenummer</th>
              <th className="sticky">Weiteres</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => {
              return (
                <tr key={index} id="body-tr">
                  <td>{item.getProperties().name}</td>
                  <td>{item.getProperties().address}</td>
                  <td>{item.getProperties().building_number}</td>
                  <td>
                    <button
                      className="buildings-buttons"
                      onClick={() =>
                        map.getView().fit(item.getGeometry(), map.getSize())
                      }
                    >
                      1
                    </button>
                    <button className="buildings-buttons">2</button>
                    <button className="buildings-buttons">3</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Buildings;
