import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";

import SearchBuilding from "./SearchBuilding";

export const SearchBuildingContainer = ({ map }) => {
  const { value4 } = useContext(AppContext);
  const [layerClicked, isLayerClicked] = useState(false);
  const [searchBuildingVisibility, setSearchBuildingVisibility] = value4;

  if (layerClicked) {
    console.log("clicked");
  }

  return (
    <div>
      {searchBuildingVisibility ? (
        <SearchBuilding map={map} id="SearchBuilding" />
      ) : null}
    </div>
  );
};
