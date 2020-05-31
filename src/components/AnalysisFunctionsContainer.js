import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { MeasureButton } from "@terrestris/react-geo";

import ruler from "../data/img/ruler.png";

const AnalysisFunctionsContainer = ({ map }) => {
  const { value13 } = useContext(AppContext);
  const [analysisBtnsVisibility, setAnalysisBtnsVisibility] = value13;

  const toggleAnalysisBtns = () => {
    let btnOne = document.getElementById("analysis-btn-one");
    let btnTwo = document.getElementById("analysis-btn-two");
    let btnThree = document.getElementById("analysis-btn-three");

    let btnsContainer = document.getElementById("measure-btn-container");

    btnsContainer.classList.remove("measure-btn-container");

    if (analysisBtnsVisibility) {
      btnOne.classList.add("hide");
      btnTwo.classList.add("hide");
      btnThree.classList.add("hide");
      setAnalysisBtnsVisibility(false);
    } else {
      btnOne.classList.remove("hide");
      btnTwo.classList.remove("hide");
      btnThree.classList.remove("hide");
      setAnalysisBtnsVisibility(true);
    }
  };

  return <div id="open-analysis-btns" onClick={toggleAnalysisBtns}></div>;
};

export default AnalysisFunctionsContainer;
