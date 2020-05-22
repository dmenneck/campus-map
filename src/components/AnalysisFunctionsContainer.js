import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import HamburgerMenu from "react-hamburger-menu";
import AnalysisFunctions from "./AnalysisFunctions";
import analysisIcon from "../data/img/analysisIcon.jpg";

const AnalysisFunctionsContainer = ({ map }) => {
  const { value13 } = useContext(AppContext);
  const [analysisBtnsVisibility, setAnalysisBtnsVisibility] = value13;

  const toggleAnalysisBtns = () => {
    if (analysisBtnsVisibility) {
      setAnalysisBtnsVisibility(false);
    } else {
      setAnalysisBtnsVisibility(true);
    }
  };

  return (
    <div>
      <AnalysisFunctions map={map} />
      <div
        id="open-analysis-btns"
        style={{
          backgroundImage: `url(${analysisIcon})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        onClick={toggleAnalysisBtns}
      ></div>
    </div>
  );
};

export default AnalysisFunctionsContainer;
