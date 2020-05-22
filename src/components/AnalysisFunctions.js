import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { MeasureButton } from "@terrestris/react-geo";

const AnalysisFunctions = ({ map }) => {
  const { value13 } = useContext(AppContext);
  const [analysisBtnsVisibility, setAnalysisBtnsVisibility] = value13;

  if (analysisBtnsVisibility) {
    return (
      <>
        <MeasureButton
          name="line"
          map={map}
          measureType="line"
          id="analysis-btn-one"
        >
          1
        </MeasureButton>

        <MeasureButton
          name="poly"
          map={map}
          measureType="polygon"
          id="analysis-btn-two"
        >
          2
        </MeasureButton>

        <MeasureButton
          name="multi"
          map={map}
          measureType="line"
          multipleDrawing
          id="analysis-btn-three"
        >
          3
        </MeasureButton>
      </>
    );
  } else {
    return null;
  }
};

export default AnalysisFunctions;
