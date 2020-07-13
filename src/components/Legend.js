import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { message } from "antd";
import wickelraum from "../data/img/wickelraum.png";
import stillraum from "../data/img/stillraum.png";
import elternKindRaum from "../data/img/elternKindRaum.png";
import kita from "../data/img/kita.png";
import spielplatz from "../data/img/spielplatz.png";
import unisex from "../data/img/unisex.png";
import parkenKlinik from "../data/img/parkenKlinik.png";
import parkenÖffentlich from "../data/img/parkenÖffentlich.png";
import parkenUni from "../data/img/parkenUni.png";

import { Divider } from "antd";
const Legend = () => {
  const { value10, value11, value12 } = useContext(AppContext);
  const [legendeVisibility, setLegendeVisibilty] = value10;
  const [parkingLegendeVisibility, setParkingLegendeVisibility] = value11;
  const [
    familyCampusLegendeVisibility,
    setFamilyCampusLegendeVisibility,
  ] = value12;

  // show welcome text 1.5s after initial render
  useEffect(() => {
    message.config({
      top: 100,
    });

    const timer = setTimeout(() => {
      message.info({
        content: "Willkommen auf dem Lageplan der UzK!",
        icon: "",
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const closeParkingLegende = () => {
    setParkingLegendeVisibility(false);
  };

  const closeFamilyCampusLegende = () => {
    setFamilyCampusLegendeVisibility(false);
  };

  if (parkingLegendeVisibility) {
    return (
      <div>
        <div id="legende-container">
          <h5 className="legende-title">
            Parkplätze
            <button
              onClick={closeParkingLegende}
              id="close-parking-legende-btn"
            >
              x
            </button>
          </h5>

          <div className="legendeGridOne">
            <img src={parkenÖffentlich} alt="" className="legende-images" />
            <p className="legende-text">Öffentlich</p>
            <img src={parkenKlinik} alt="" className="legende-images" />
            <p className="legende-text">Klinik</p>
            <img src={parkenUni} alt="" className="legende-images" />
            <p className="legende-text">Universitätsangehörige</p>
          </div>
        </div>
      </div>
    );
  } else if (familyCampusLegendeVisibility) {
    return (
      <div>
        <div id="legende-container">
          <h5 className="legende-title">
            Familien Campus Plan
            <button
              onClick={closeFamilyCampusLegende}
              id="close-parking-legende-btn"
            >
              x
            </button>
          </h5>

          <div className="legendeGridTwo">
            <img src={wickelraum} alt="" className="legende-images" />
            <p className="legende-text-grid-two">Wickelraum</p>
            <img src={stillraum} alt="" className="legende-images" />
            <p className="legende-text-grid-two">Stillraum</p>
            <img src={elternKindRaum} alt="" className="legende-images" />
            <p className="legende-text-grid-two">Eltern-Kind-Raum</p>
            <img src={kita} alt="" className="legende-images" />
            <p className="legende-text-grid-two">Kindertagesstätte</p>
            <img src={spielplatz} alt="" className="legende-images" />
            <p className="legende-text-grid-two">Spielplatz</p>
            <img src={unisex} alt="" className="legende-images" />
            <p className="legende-text-grid-two">Unisex-WC</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Legend;
