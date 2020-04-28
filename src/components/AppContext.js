import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [
    clickedBuildingsInformation,
    setclickedBuildingsInformation,
  ] = useState([]);

  const [layerClicked, isLayerClicked] = useState(false);
  const [theVectorLayer, setVectorLayer] = useState({});
  const [searchBuildingVisibility, setSearchBuildingVisibility] = useState(
    false
  );
  const [searchBarVisibility, setSearchBarVisibility] = useState(true);
  const [menuContainerVisibility, setMenuContainerVisibility] = useState(false);
  const [campusAreasContainer, setCampusAreasContainer] = useState(false);
  const [legendeVisibility, setLegendeVisibilty] = useState(false);

  return (
    <AppContext.Provider
      value={{
        value2: [layerClicked, isLayerClicked],
        value3: [theVectorLayer, setVectorLayer],
        value4: [searchBuildingVisibility, setSearchBuildingVisibility],
        value5: [isDrawerVisible, setIsDrawerVisible],
        value6: [clickedBuildingsInformation, setclickedBuildingsInformation],
        value7: [searchBarVisibility, setSearchBarVisibility],
        value8: [menuContainerVisibility, setMenuContainerVisibility],
        value9: [campusAreasContainer, setCampusAreasContainer],
        value10: [legendeVisibility, setLegendeVisibilty],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
