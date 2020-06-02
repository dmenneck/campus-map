import React, { useState, useEffect } from "react";
import { AgFeatureGrid } from "@terrestris/react-geo";
import OlStyle from "ol/style/Style";
import { Fill } from "ol/style";
import BuildingsTable from "./BuildingsTable";
import { buildings } from "./Layers";
import { littleMap } from "./LittleMapInBuildings";
import LittleMapInBuildings from "./LittleMapInBuildings";

const Buildings = () => {
  const [features, setFeatures] = useState([]);

  // getFeatures after first render (after performing the DOM updates) and after every update (same as "mounting" and "updating")
  useEffect(() => {
    setFeatures(buildings.getSource().getFeatures());
  }, []);

  return (
    <div id="buildings-table-container">
      <div id="buildings-header">
        <span>Gebäudeübersicht</span>
        <br></br>
        <span>
          Klicken Sie auf die gewünschte Zeile, um das ausgewählte Gebäude auf
          dem Lapeplan anzuzeigen
        </span>
      </div>

      <LittleMapInBuildings />

      <div id="feature-grid-container">
        <AgFeatureGrid
          features={features}
          map={littleMap}
          columnDefs={{
            name: {
              headerName: "Name",
              sortable: true,
              filter: true,
              resiable: true,
            },
            barrier_free_entrance: {
              headerName: "Barrierefreiheit",
              sortable: true,
              filter: true,
              resiable: true,
            },
            address: {
              headerName: "Addresse",
              sortable: true,
              filter: true,
              resiable: true,
            },
            building_number: {
              headerName: "Gebäudenr.",
              sortable: true,
              filter: true,
              resiable: true,
            },
          }}
          attributeBlacklist={[
            "facilities_name",
            "facilities_hyperlink",
            "image",
            "type",
          ]}
          className="agFeatureGrid"
          featureStyle={
            new OlStyle({
              fill: new Fill({
                color: "rgba(0,0,0,0)",
              }),
            })
          }
        />
        {/*<BuildingsTable /> */}
      </div>
    </div>
  );
};

export default Buildings;
