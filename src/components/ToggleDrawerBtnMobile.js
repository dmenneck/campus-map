import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const ToggleDrawerBtnMobile = () => {
  const { value5 } = useContext(AppContext);
  const [isDrawerVisible, setIsDrawerVisible] = value5;

  const toggleDrawer = () => {
    if (isDrawerVisible) {
      setIsDrawerVisible(false);
    } else {
      setIsDrawerVisible(true);
    }
  };

  return (
    <button id="open-information-drawer-mobile" onClick={toggleDrawer}>
      i
    </button>
  );
};

export default ToggleDrawerBtnMobile;
