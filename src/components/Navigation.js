import React from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

import UniKölnLogo from "../data/img/uniKölnLogo.png";

const Navigation = () => {
  return (
    <div>
      <div id="globalNav">
        <img id="uniKölnLogo" src={UniKölnLogo} alt=""></img>
        <div id="globalNavLogo">
          <a href="Map.js">
            Campus Map <span>Universität zu Köln</span>
          </a>
        </div>

        <NavLink to="./Contact" className="navlinks">
          Kontakt
        </NavLink>
        <NavLink to="./Informations" className="navlinks">
          Infos
        </NavLink>

        <NavLink to="./Map" className="navlinks">
          Lageplan
        </NavLink>
      </div>
      <MobileNav />
    </div>
  );
};

export default Navigation;
