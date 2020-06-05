import React, { useState, useEffect } from "react";

import { buildings, osmTileLayer } from "./Layers";

import OlMap from "ol/Map";
import OlView from "ol/View";

const Buildings = () => {
  const [features, setFeatures] = useState([]);
  const [clickedFeature, setClickedFeature] = useState();
  const [mapVisibile, setIsMapVisible] = useState(false);

  console.log(clickedFeature);

  // getFeatures after first render (after performing the DOM updates) and after every update (same as "mounting" and "updating")
  useEffect(() => {
    setFeatures(buildings.getSource().getFeatures());
  }, []);

  const center = [771105.02, 6608382.01]; //Cologne

  const view = new OlView({
    center: center,
    zoom: 1.8,
    maxResolution: 14,
  });

  const littleMap = new OlMap({
    target: "little-map",
    layers: [osmTileLayer, buildings],
    view: view,
  });

  return (
    <div>
      <div id="buildings-header">
        <span id="buildings-header-title">Gebäudeübersicht</span>
        <br></br>
        <span>
          Klicken Sie auf die gewünschte Zeile, um das ausgewählte Gebäude auf
          dem Lapeplan anzuzeigen
        </span>
      </div>

      <div id="little-map"></div>

      <br></br>

      <div id="buildings-table-container">
        <table className="u-full-width" id="buildings-table">
          <thead>
            <tr id="thead">
              <th className="sticky">Name</th>
              <th className="sticky">Addresse</th>
              <th className="sticky">Gebäudenummer</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => {
              return (
                <tr
                  key={index}
                  id="body-tr"
                  onMouseEnter={() =>
                    littleMap
                      .getView()
                      .fit(item.getGeometry(), littleMap.getSize())
                  }
                >
                  <td>{item.getProperties().name}</td>
                  <td>{item.getProperties().address}</td>
                  <td>{item.getProperties().building_number}</td>
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
