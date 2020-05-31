import React from "react";
import BuildingsTable from "./BuildingsTable";

const Buildings = () => {
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

      <div>
        <BuildingsTable />
      </div>
    </div>
  );
};

export default Buildings;
