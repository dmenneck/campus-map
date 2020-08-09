import React from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import UniKölnLogo from "../data/img/uniKölnLogo.png";

const Navigation = () => {
  return (
    <div>
      <div id="globalNav">
        <img id="uniKölnLogo" src={UniKölnLogo} alt=""></img>
        <div id="globalNavLogo">
          <a href="Map">
            Campus Map <span>Universität zu Köln</span>
          </a>
        </div>

        <div id="navbar-media-icons">
          <a
            href="https://www.facebook.com/universitaetkoeln/?ref=ts"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="media-icons facebook"
              color="white"
              size="lg"
            />
          </a>
          <a href="https://twitter.com/UniCologne" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="media-icons twitter"
              size="lg"
            />
          </a>
          <a href="https://www.instagram.com/uni_koeln/?hl=de" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="media-icons instagram"
              size="lg"
            />
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
