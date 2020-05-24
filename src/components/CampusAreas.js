import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Divider } from "antd";

export const CampusAreas = ({ map }) => {
  const { value9 } = useContext(AppContext);
  const [campusAreasContainer, setCampusAreasContainer] = value9;

  const hauptgebäude = [
    770822.2704333204,
    6608316.264104004,
    771760.9900333204,
    6608898.466504005,
  ];

  const medizinkomplex = [
    769023.0307672471,
    6607396.552711327,
    770816.7807672471,
    6608509.052711327,
  ];

  const physicChemie = [
    770708.0976094331,
    6607361.761087556,
    772501.8476094331,
    6608474.261087556,
  ];

  const bioGeo = [
    771625.1504877856,
    6608014.8692342555,
    772522.0254877856,
    6608571.1192342555,
  ];

  const humf = [
    769306.4250544582,
    6609014.169207078,
    771198.9089719867,
    6610187.904877183,
  ];

  const removeContainer = () => {
    setCampusAreasContainer(false);
  };

  const getExtent = () => {
    console.log(map.getView().calculateExtent());
  };

  const zoomToHauptgebäude = () => {
    map.getView().fit(hauptgebäude, map.getSize());
  };

  const zoomToMedizinkomplex = () => {
    map.getView().fit(medizinkomplex, map.getSize());
  };

  const zoomToPhysicAndChemie = () => {
    map.getView().fit(physicChemie, map.getSize());
  };

  const zoomToBioAndGeo = () => {
    map.getView().fit(bioGeo, map.getSize());
  };

  const zoomToHumf = () => {
    map.getView().fit(humf, map.getSize());
  };

  if (campusAreasContainer) {
    return (
      <div id="campus-Areas-Container">
        <div id="bereiche-title">
          Beliebte Suchanfragen
          <button id="close-data-container-btn" onClick={removeContainer}>
            x
          </button>
        </div>
        <ul>
          {/*<li onClick={getExtent}>get current extent</li>*/}
          <li
            onClick={zoomToHauptgebäude}
            className="campus-areas-spans unselectable"
          >
            Hauptgebäude (inkl. Wiso, Bib, ...)
          </li>
          <li
            onClick={zoomToMedizinkomplex}
            className="campus-areas-spans unselectable"
          >
            Medizinkomplex
          </li>
          <li
            onClick={zoomToPhysicAndChemie}
            className="campus-areas-spans unselectable"
          >
            Physik und Chemie
          </li>
          <li
            onClick={zoomToBioAndGeo}
            className="campus-areas-spans unselectable"
          >
            Biologie und Geowissenschaften
          </li>
          <li onClick={zoomToHumf} className="campus-areas-spans unselectable">
            Humanwissenschften
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default CampusAreas;
