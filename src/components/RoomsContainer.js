import React, { useContext } from "react";

import { AppContext } from "./AppContext";
import { Collapse } from "antd";

const { Panel } = Collapse;

const RoomsContainer = () => {
  const { value20, value21, value22 } = useContext(AppContext);
  const [clickedRoom, setClickedRoom] = value20;
  const [clickedRoomData, setClickedRoomData] = value21;
  const [roomNames, setRoomNames] = value22;

  let filteredData = clickedRoomData.filter((item) => {
    return item.names === roomNames;
  });

  let names = filteredData.map((item) => {
    return item.names.split(",");
  });

  let obj = names.map((item) => {
    return { name: item };
  });

  return (
    <div id="show-rooms-data-container">
      <Collapse defaultActiveKey={["1"]}>
        {filteredData.map((item, index) => {
          return (
            <Panel header={item.names} key={index}>
              <div id="rauminformationen-text-container">
                <div id="rauminformationen-image-container">
                  <img src={item.img} id="rauminformationen-image"></img>
                </div>
                <div id="rauminformationen-text">
                  <span>Email: {item.email}</span>
                  <br></br>
                  <span>Telefon: {item.tel_num}</span>
                </div>
              </div>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};
export default RoomsContainer;
