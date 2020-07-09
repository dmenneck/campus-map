import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";

import roomsOne from "../data/geoData/roomsOne.geojson";
import roomsTwo from "../data/geoData/roomsTwo.geojson";
import roomsThree from "../data/geoData/roomsThree.geojson";

import GeoJSON from "ol/format/GeoJSON";

import { Modal, Button } from "antd";

let dataOne = "";
async function fetchDataOne() {
  const response = await fetch(roomsOne);
  const json = await response.json();
  dataOne = json;
}

fetchDataOne();

let dataTwo = "";
async function fetchDataTwo() {
  const response = await fetch(roomsTwo);
  const json = await response.json();
  dataTwo = json;
}

fetchDataTwo();

let dataThree = "";
async function fetchDataThree() {
  const response = await fetch(roomsThree);
  const json = await response.json();
  dataThree = json;
}

fetchDataThree();

const SearchEmployee = () => {
  const { value1 } = useContext(AppContext);
  const [searchEmployeeVisible, setSearchEmployeeVisible] = value1;

  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setSearchEmployeeVisible(false);

      setLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setSearchEmployeeVisible(false);
  };

  let dataArrCombined = [];

  if (dataOne.features === undefined) {
    // nothing happens
  } else {
    dataOne.features.map((item) => {
      dataArrCombined.push(item);
    });

    dataTwo.features.map((item) => {
      dataArrCombined.push(item);
    });

    dataThree.features.map((item) => {
      dataArrCombined.push(item);
    });
  }

  const featureNames = dataArrCombined.map((item) => {
    return item.properties.names;
  });

  let filteredData = featureNames.filter((name) => {
    return name.toLowerCase().indexOf(searchInput.toLocaleLowerCase()) !== -1;
  });

  let filteredDataSplitted = filteredData.map((names) => {
    return names.split(",");
  });

  const getInput = (e) => {
    setSearchInput(e.target.value);
  };

  // console.log(filteredDataSplitted.flat());

  return (
    <div>
      <Modal
        visible={searchEmployeeVisible}
        title="Suche nach MitarbeiterInnen..."
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <label class="field a-field a-field_a1">
          <input
            onChange={getInput}
            class="field__input a-field__input"
            placeholder="z.B. Dr. Christian Willmes..."
            required
          ></input>
          <span class="a-field__label-wrap">
            <span class="a-field__label">MitarbeiterIn...</span>
          </span>
        </label>

        <ul id="employee-container">
          {filteredDataSplitted.flat().map((item) => {
            return <li className="employees">{item}</li>;
          })}
        </ul>
      </Modal>
    </div>
  );
};

export default SearchEmployee;
