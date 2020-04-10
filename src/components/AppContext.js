import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [
    clickedBuildingsInformation,
    setclickedBuildingsInformation,
  ] = useState([]);
  const [areFunctionalBtnsVisible, setFunctionalBtnsVisibility] = useState(
    true
  );
  const [layerClicked, isLayerClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        value1: [areFunctionalBtnsVisible, setFunctionalBtnsVisibility],
        value2: [layerClicked, isLayerClicked],
        value5: [isDrawerVisible, setIsDrawerVisible],
        value6: [clickedBuildingsInformation, setclickedBuildingsInformation],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
