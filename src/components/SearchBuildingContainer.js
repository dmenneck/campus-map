import React, { useContext } from 'react';
import { AppContext } from './AppContext';

import SearchBuilding from './SearchBuilding';

export const SearchBuildingContainer = ({ map }) => {
  const { value4 } = useContext(AppContext);

  const [searchBuildingVisibility, setSearchBuildingVisibility] = value4;

  return (
    <div>
      {searchBuildingVisibility ? (
        <SearchBuilding map={map} id='SearchBuilding' />
      ) : null}
    </div>
  );
};
