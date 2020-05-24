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

    if (analysisBtnsVisibility) {
      setAnalysisBtnsVisibility(false);
      btnOne.classList.add("hide");
      btnTwo.classList.add("hide");
      btnThree.classList.add("hide");
    } else {
      setAnalysisBtnsVisibility(true);
      btnOne.classList.remove("hide");
      btnTwo.classList.remove("hide");
      btnThree.classList.remove("hide");
    }
  };

  return (
    <div>
      <div
        id="open-analysis-btns"
        style={{
          backgroundImage: `url(${ruler})`,
          backgroundSize: "contain",
        }}
        onClick={toggleAnalysisBtns}
      ></div>
    </div>
  );
};

export default AnalysisFunctionsContainer;
