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

  let splittedNames = filteredData.map((item) => {
    return item.names.split(",");
  });

  let splittedEmails = filteredData.map((item) => {
    return item.email.split(",");
  });

  console.log(filteredData);

  // .flat() -> erstellt rekursiv ein neues Array mit allen Elementen von Unterarrays bis zu einer spezifizierten Tiefe
  return (
    <div id="show-rooms-data-container">
      <Collapse defaultActiveKey={["1"]}>
        {splittedNames.flat().map((name, index) => {
          return (
            <Panel header={name} key={index}>
              {filteredData.map((item) => {
                return (
                  <div key={index} id="rauminformationen-text-container">
                    <div id="rauminformationen-image-container">
                      <img
                        src={item.img.split(",")[index]}
                        id="rauminformationen-image"
                      ></img>
                    </div>

                    <div id="rauminformationen-text">
                      <span className="rauminformationen-text-spans">
                        Email: {item.email.split(",")[index]}
                      </span>

                      <span className="rauminformationen-text-spans">
                        Telefonnummer: {item.tel_num.split(",")[index]}
                      </span>

                      <span className="rauminformationen-text-spans">
                        Homepage:
                        <a
                          href={item.homepage.split(",")[index]}
                          key={index}
                          target="_blank"
                        >
                          hier
                        </a>
                      </span>
                    </div>
                  </div>
                );
              })}
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};
export default RoomsContainer;
