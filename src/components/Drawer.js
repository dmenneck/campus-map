import React, { useContext } from "react";
import { Drawer } from "antd";
import { AppContext } from "./AppContext";

import uniSchriftzug from "../data/img/uniSchriftzug.jpg";
import facebookIcon from "../data/img/facebook.png";
import instagramIcon from "../data/img/instagram.png";
import youtubeIcon from "../data/img/youtube.png";

const DrawerComponent = () => {
  const { value5 } = useContext(AppContext);
  const [isDrawerVisible, setIsDrawerVisible] = value5;

  const toggleDrawer = () => {
    setIsDrawerVisible(!true);
  };

  let width = "";

  if (window.innerWidth > 550) {
    width = "426px";
  } else {
    width = "100%";
  }

  return (
    <div id="drawer-container">
      <Drawer
        title="Menüleiste"
        placement="right"
        onClose={toggleDrawer}
        visible={isDrawerVisible}
        width={width}
      >
        <div id="drawer-grid-container">
          <div>
            <p className="drawer-header-text">Universität zu Köln</p>
            <p>
              Die Universität zu Köln ist eine der ältesten und größten
              Universitäten Europas. Aufgrund ihrer hervorragenden
              wissenschaftlichen Leistungen und der hohen Qualität und
              Diversität ihrer Lehrangebote genießt sie ein ausgezeichnetes
              internationales Renommee. Die Mission der UzK ist es, Wissen zu
              schaffen, zu bewahren und zu vermitteln, ihren Studierenden und
              Nachwuchswissenschaftlerinnen eine akademische Ausbildung auf
              hohem Niveau zu bieten, die sie sowohl für die Wissenschaft als
              auch für den Arbeitsmarkt qualifiziert, Spitzenforschung zu
              fördern und Innovationen voranzutreiben, wobei sie die sich
              ständig verändernden Bedürfnisse und Herausforderungen der
              heutigen Gesellschaft in den Blick nimmt.
            </p>
          </div>

          <div>
            <p className="drawer-header-text">Social Media</p>
            <a href="http://www.facebook.de" title="Facebook" target="_blank">
              <img src={facebookIcon} className="social-media-icons" />
            </a>

            <a href="http://www.facebook.de" title="Facebook" target="_blank">
              <img src={instagramIcon} className="social-media-icons" />
            </a>

            <a href="http://www.facebook.de" title="Facebook" target="_blank">
              <img src={youtubeIcon} className="social-media-icons" />
            </a>
          </div>

          <div>
            <p>3</p>
          </div>
        </div>
        <div id="drawer-logo-container">
          <img src={uniSchriftzug} alt="logo" id="logoSchriftzug" />
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
