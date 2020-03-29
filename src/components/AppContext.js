import React, { createContext, useState, useMemo } from 'react';

export const AppContext = createContext();

export const ContextProvider = props => {
  const [btnBackgroundLayer, setBtnBackgroundLayer] = useState(false);
  const [btnAgFeatureGrid, setBtnAgFeatureGrid] = useState(false);

  return (
    <AppContext.Provider
      value={{
        value: [btnBackgroundLayer, setBtnBackgroundLayer],
        value2: [btnAgFeatureGrid, setBtnAgFeatureGrid]
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
