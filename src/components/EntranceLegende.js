import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import bluedot from "../data/img/bluedot.png";
import orangedot from "../data/img/orangedot.png";

const EntranceLegende = ({ map }) => {
  const { value2, value17 } = useContext(AppContext);
  const [layerClicked, isLayerClicked] = value2;
  const [entrancesLegend, setEntrancesLegend] = value17;

  if (layerClicked && entrancesLegend) {
    return (
      <div id="entrance-legend">
        <img src={bluedot} style={{ width: "20px", height: "auto" }}></img>
        <p className="entrance-legend-text unselectable">Eingänge</p>
        <img src={orangedot} style={{ width: "20px", height: "auto" }}></img>
        <p className="entrance-legend-text unselectable">rollstuhlgerecht</p>
      </div>
    );
  } else {
    return null;
  }
};

export default EntranceLegende;
