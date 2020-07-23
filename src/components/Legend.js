import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { message, notification } from "antd";
import wickelraum from "../data/img/wickelraum.png";
import stillraum from "../data/img/stillraum.png";
import elternKindRaum from "../data/img/elternKindRaum.png";
import kita from "../data/img/kita.png";
import spielplatz from "../data/img/spielplatz.png";
import unisex from "../data/img/unisex.png";
import parkenKlinik from "../data/img/parkenKlinik.png";
import parkenÖffentlich from "../data/img/parkenÖffentlich.png";
import parkenUni from "../data/img/parkenUni.png";
import UniKölnLogo from "../data/img/logo-uni.png";

import { parking, familyCampus } from "./Layers";

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
      top: 50,
    });

    let data = (
      <div>
        <img src={UniKölnLogo} id="logo-greetings"></img>
        <span id="span-greetings">Willkommen auf dem Lageplan der UzK!</span>
      </div>
    );
    const timer = setTimeout(() => {
      message.info({
        content: data,
        icon: "",
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  notification.config({
    top: 60,
  });

  const openNotificationParking = () => {
    const key = `open${Date.now()}`;

    let notificationParking = (
      <div>
        <div id="legende-title-container">
          <span className="legende-title">Parkplätze</span>
          <button
            onClick={() => notification.close(key)}
            className="close-legende-title-container"
          >
            X
          </button>
        </div>
        <div className="legendeGridOne">
          <img src={parkenÖffentlich} alt="" className="legende-images" />
          <p className="legende-text">Öffentlich</p>
          <img src={parkenKlinik} alt="" className="legende-images" />
          <p className="legende-text">Klinik</p>
          <img src={parkenUni} alt="" className="legende-images" />
          <p className="legende-text">Universitätsangehörige</p>
        </div>
      </div>
    );

    notification.open({
      message: `Notification title`,
      description: notificationParking,
      placement: "topLeft",
      key,
      duration: 0,
    });
  };

  useEffect(() => {
    if (parkingLegendeVisibility) {
      openNotificationParking();
    }
  }, [parkingLegendeVisibility]);

  const openNotificationFamilyCampus = () => {
    const key = `open${Date.now()}`;

    let notificationFamily = (
      <div>
        <div id="legende-title-container">
          <span className="legende-title">Familien Campus Plan</span>
          <button
            onClick={() => notification.close(key)}
            className="close-legende-title-container"
          >
            X
          </button>
        </div>
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
    );

    notification.open({
      message: `Notification title`,
      description: notificationFamily,
      placement: "topLeft",
      key,
      duration: 0,
    });
  };

  useEffect(() => {
    if (familyCampusLegendeVisibility) {
      openNotificationFamilyCampus();
    }
  }, [familyCampusLegendeVisibility]);

  return null;
};

export default Legend;
