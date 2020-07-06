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

  // .flat() -> erstellt rekursiv ein neues Array mit allen Elementen von Unterarrays bis zu einer spezifizierten Tiefe
  return (
    <div id="show-rooms-data-container">
      <Collapse>
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

                    <div id="rauminformationen-container">
                      <div>
                        <div id="rauminformationen-data">
                          <p className="text-bold">
                            {item.build_name.split(",")[index]}
                            <p id="inline">, Raum </p>
                            {item.room_num.split(",")[0]}
                          </p>
                          <p>{item.street.split(",")[index]}</p>
                          <p>{item.postcode.split(",")[index]}</p>
                        </div>

                        <div className="rauminformationen-grid">
                          <p className="rauminformationen-type">Email:</p>
                          <p className="rauminformationen-text">
                            {item.email.split(",")[index]}
                          </p>
                        </div>

                        <div className="rauminformationen-grid">
                          <p className="rauminformationen-type">
                            Telefonnummer:
                          </p>
                          <p className="rauminformationen-text">
                            {item.tel_num.split(",")[index]}
                          </p>
                        </div>

                        <div className="rauminformationen-grid">
                          <p className="rauminformationen-type">Fax:</p>
                          <p className="rauminformationen-text">
                            {item.fax_num.split(",")[index]}
                          </p>
                        </div>

                        <a
                          href={item.homepage.split(",")[index]}
                          key={index}
                          target="_blank"
                          className="rauminformationen-text"
                          id="webseite-link"
                        >
                          Weiter zur Webseite
                        </a>
                      </div>
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
