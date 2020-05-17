import React, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { notification, message } from "antd";
import wickelraum from "../data/img/wickelraum.png";
import stillraum from "../data/img/stillraum.png";
import elternKindRaum from "../data/img/elternKindRaum.png";
import kita from "../data/img/kita.png";
import spielplatz from "../data/img/spielplatz.png";
import unisex from "../data/img/unisex.png";

const Legend = () => {
  const { value10 } = useContext(AppContext);
  const [legendeVisibility, setLegendeVisibilty] = value10;

  notification.config({
    top: 60,
  });

  const openNotification = (placement) => {
    notification.open({
      description: (
        <div id="legende-container">
          <h5 className="legende-title">Legende</h5>
          <p className="legende-text-title">Parkplätze</p>
          <div className="legendeGridOne">
            <img src={wickelraum} alt="" className="legende-images" />
            <p className="legende-text">öffentlich</p>
            <img src={wickelraum} alt="" className="legende-images" />
            <p className="legende-text">Uni.angeh.</p>
            <img src={wickelraum} alt="" className="legende-images" />
            <p className="legende-text">Klinik</p>
          </div>
          <p className="legende-text-title">Familien-Campus-Plan</p>
        </div>
      ),
      placement,
      duration: 0,
      closeIcon: <button id="close-Legende">X</button>,
    });
  };

  if (legendeVisibility) {
    openNotification("topRight");
    setLegendeVisibilty(false);
  }

  // show welcome text 1.5s after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      message.info({
        content: "Willkommen auf dem Lageplan der UzK",
        icon: "",
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return <div></div>;
};

export default Legend;
