import React from "react";
import { NavLink } from "react-router-dom";

import UniKölnLogo from "../data/img/uniKölnLogo.png";

const Navigation = () => {
  const removeStopScrollingClass = () => {
    document.body.classList.remove("stop-scrolling");
  };
  return (
    <div>
      <div id="globalNav">
        <img id="uniKölnLogo" src={UniKölnLogo} alt=""></img>
        <div id="globalNavLogo">
          <a href="Map.js">
            Campus Map <span>Universität zu Köln</span>
          </a>
        </div>
        <NavLink to="./Contact">Kontakt</NavLink>
        <NavLink to="./Informations">Infos</NavLink>
        <NavLink to="./Buildings" onClick={removeStopScrollingClass}>
          Gebäudeübersicht
        </NavLink>
        <NavLink to="./Map">Lageplan</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
