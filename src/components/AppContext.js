import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [
    clickedBuildingsInformation,
    setclickedBuildingsInformation,
  ] = useState([]);

  const [clickedBuildingFeature, setClickedBuildingFeature] = useState([]);

  const [layerClicked, isLayerClicked] = useState(false);
  const [theVectorLayer, setVectorLayer] = useState({});
  const [searchBuildingVisibility, setSearchBuildingVisibility] = useState(
    false
  );
  const [searchBarVisibility, setSearchBarVisibility] = useState(true);
  const [menuContainerVisibility, setMenuContainerVisibility] = useState(false);
  const [campusAreasContainer, setCampusAreasContainer] = useState(false);
  const [legendeVisibility, setLegendeVisibilty] = useState(false);
  const [parkingLegendeVisibility, setParkingLegendeVisibility] = useState(
    false
  );
  const [
    familyCampusLegendeVisibility,
    setFamilyCampusLegendeVisibility,
  ] = useState(false);
  const [analysisBtnsVisibility, setAnalysisBtnsVisibility] = useState(false);
  const [search, setSearch] = useState("");
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [entrancesLegend, setEntrancesLegend] = useState(false);
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);
  const [clickedRoom, setClickedRoom] = useState(false);
  const [clickedRoomData, setClickedRoomData] = useState([]);
  const [roomNames, setRoomNames] = useState("");

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
        value11: [parkingLegendeVisibility, setParkingLegendeVisibility],
        value12: [
          familyCampusLegendeVisibility,
          setFamilyCampusLegendeVisibility,
        ],
        value13: [analysisBtnsVisibility, setAnalysisBtnsVisibility],
        value14: [search, setSearch],
        value15: [burgerOpen, setBurgerOpen],
        value16: [clickedBuildingFeature, setClickedBuildingFeature],
        value17: [entrancesLegend, setEntrancesLegend],
        value18: [roomFeatures, setRoomFeatures],
        value19: [btnClicked, setBtnClicked],
        value20: [clickedRoom, setClickedRoom],
        value21: [clickedRoomData, setClickedRoomData],
        value22: [roomNames, setRoomNames],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
