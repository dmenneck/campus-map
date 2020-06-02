import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import HamburgerMenu from "react-hamburger-menu";

const ToggleMenuContainerBtn = () => {
  const { value8 } = useContext(AppContext);
  const [menuContainerVisibility, setMenuContainerVisibility] = value8;
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleMenuContainer = () => {
    if (menuContainerVisibility) {
      setMenuContainerVisibility(false);
    } else {
      setMenuContainerVisibility(true);
    }
  };

  //menu.classList.add("animate");
  //menu.classList.remove("animate");

  const handleClick = () => {
    setBurgerOpen(!burgerOpen);
    toggleMenuContainer();
  };
  return (
    <div>
      <div id="hamburger-menu-container">
        <HamburgerMenu
          isOpen={burgerOpen}
          menuClicked={handleClick}
          color="#32475b"
          width={30}
          height={30}
          strokeWidth={2}
          borderRadius={2}
        />
      </div>
    </div>
  );
};

export default ToggleMenuContainerBtn;
