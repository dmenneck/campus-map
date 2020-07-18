import React, { useState, useEffect } from "react";

import geolocation from "../data/img/geoLocation.png";
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

  // sort objects in array alphabetically on name
  let sortedFeatures = features.sort((a, b) => {
    return a.getProperties().name.localeCompare(b.getProperties().name);
  });

  return (
    <div>
      <div id="buildings-table-container">
        <table className="u-full-width" id="buildings-table">
          <thead>
            <tr id="thead">
              <th className="sticky">Name</th>
              <th className="sticky">Addresse</th>
              <th className="sticky">Gebäudenummer</th>
              <th className="sticky">Karte</th>
            </tr>
          </thead>
          <tbody>
            {sortedFeatures.map((item, index) => {
              return (
                <tr key={index} id="body-tr">
                  <td>{item.getProperties().name}</td>
                  <td>{item.getProperties().address}</td>
                  <td>{item.getProperties().building_number}</td>
                  <td>
                    <button
                      className="buildings-buttons"
                      style={{
                        backgroundImage: `url(${geolocation})`,
                        backgroundSize: "80%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      onClick={() =>
                        map.getView().fit(item.getGeometry(), map.getSize())
                      }
                    >
                      1
                    </button>
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
