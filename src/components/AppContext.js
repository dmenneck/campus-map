import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [btnBackgroundLayer, setBtnBackgroundLayer] = useState(false);
  const [btnAgFeatureGrid, setBtnAgFeatureGrid] = useState(false);
  const [btnLegend, setBtnLegend] = useState(false);

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [
    clickedBuildingsInformation,
    setclickedBuildingsInformation,
  ] = useState([]);

  return (
    <AppContext.Provider
      value={{
        value: [btnBackgroundLayer, setBtnBackgroundLayer],
        value2: [btnAgFeatureGrid, setBtnAgFeatureGrid],
        value3: [btnLegend, setBtnLegend],

        value5: [isDrawerVisible, setIsDrawerVisible],
        value6: [clickedBuildingsInformation, setclickedBuildingsInformation],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
