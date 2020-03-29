import React, { createContext, useState, useMemo } from 'react';

export const AppContext = createContext();

export const ContextProvider = props => {
  const [btnBackgroundLayer, setBtnBackgroundLayer] = useState(false);

  const value = [btnBackgroundLayer, setBtnBackgroundLayer];

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
