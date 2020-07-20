import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";

import roomsOne from "../data/geoData/roomsOne.geojson";
import roomsTwo from "../data/geoData/roomsTwo.geojson";
import roomsThree from "../data/geoData/roomsThree.geojson";

import LazyLoad from "react-lazyload";

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
  const { value1, value4 } = useContext(AppContext);
  const [searchEmployeeVisible, setSearchEmployeeVisible] = value1;
  const [searchBuildingVisibility, setSearchBuildingVisibility] = value4;

  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [clickedFeatureProperties, setClickedFeatureProperties] = useState([]);
  const [employeeVisible, setEmployeeVisible] = useState(false);

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

  const handleEmployeeCancel = () => {
    setSearchBuildingVisibility(false);
    setEmployeeVisible(false);
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

  const getInput = (e) => {
    setSearchInput(e.target.value);
  };

  const getFeatureProperties = (e) => {
    let clickedName = e.target.closest(".employees").childNodes[2].innerHTML;

    console.log(e.target.closest(".employees"));

    //console.log(clickedName);

    let clickedPropertiesArr = Object.entries(list).map((item, index) => {
      if (item[1].name === clickedName) {
        return item;
      }
    });

    let undefinedRemoved = clickedPropertiesArr.filter((item) => {
      return item !== undefined;
    });

    let clickedProperties = undefinedRemoved.map((i) => {
      setClickedFeatureProperties(i[1]);
    });

    setSearchEmployeeVisible(false);
    setEmployeeVisible(true);
  };

  let namesArr = [];
  let streetArr = [];
  let emailArr = [];
  let fax_numArr = [];
  let homepageArr = [];
  let imgArr = [];
  let build_numArr = [];
  let tel_numArr = [];
  let room_numArr = [];
  let build_nameArr = [];
  let postcodeArr = [];
  let titleArr = [];

  let namesPushedToArray = dataArrCombined.map((item) => {
    namesArr.push(item.properties.names.split(","));
  });

  let streetPushedToArray = dataArrCombined.map((item) => {
    if (item.properties.street === undefined) {
      // nothing happens
    } else {
      streetArr.push(item.properties.street.split(","));
    }
  });

  let emailPushedToArray = dataArrCombined.map((item) => {
    emailArr.push(item.properties.email.split(","));
  });

  let fax_numPushedToArray = dataArrCombined.map((item) => {
    fax_numArr.push(item.properties.fax_num.split(","));
  });

  let homepagePushedToArray = dataArrCombined.map((item) => {
    homepageArr.push(item.properties.homepage.split(","));
  });

  let imgPushedToArray = dataArrCombined.map((item) => {
    imgArr.push(item.properties.img.split(","));
  });

  let build_numPushedToArray = dataArrCombined.map((item) => {
    build_numArr.push(item.properties.build_num.split(","));
  });

  let tel_numPushedToArray = dataArrCombined.map((item) => {
    tel_numArr.push(item.properties.tel_num.split(","));
  });

  let room_numPushedToArray = dataArrCombined.map((item) => {
    room_numArr.push(item.properties.room_num.split(","));
  });

  let build_nameArrPushedToArray = dataArrCombined.map((item) => {
    build_nameArr.push(item.properties.build_name.split(","));
  });

  let postcodeArrPushedToArray = dataArrCombined.map((item) => {
    postcodeArr.push(item.properties.postcode.split(","));
  });

  let titleArrPushedToArray = dataArrCombined.map((item) => {
    titleArr.push(item.properties.title.split(","));
  });

  let dataObj = [
    {
      names: namesArr.map((i) => i.toString().split(",")),
      streets: streetArr.map((item) => item.toString().split(",")),
      emails: emailArr.map((i) => i.toString().split(",")),
      fax_nums: fax_numArr.map((i) => i.toString().split(",")),
      homepages: homepageArr.map((i) => i.toString().split(",")),
      images: imgArr.map((i) => i.toString().split(",")),
      build_nums: build_numArr.map((i) => i.toString().split(",")),
      tel_nums: tel_numArr.map((i) => i.toString().split(",")),
      room_nums: room_numArr.map((i) => i.toString().split(",")),
      build_names: build_nameArr.map((i) => i.toString().split(",")),
      postcodes: postcodeArr.map((i) => i.toString().split(",")),
      titles: titleArr.map((i) => i.toString().split(",")),
    },
  ];

  const featurePropertiesObj = [
    Object.fromEntries(
      dataObj[0].names.flat().map((i, index) => [
        index,
        {
          name: i,
          street: dataObj[0].streets.flat()[index],
          email: dataObj[0].emails.flat()[index],
          fax_num: dataObj[0].fax_nums.flat()[index],
          homepage: dataObj[0].homepages.flat()[index],
          img: dataObj[0].images.flat()[index],
          build_num: dataObj[0].build_nums.flat()[index],
          tel_num: dataObj[0].tel_nums.flat()[index],
          room_num: dataObj[0].room_nums.flat()[index],
          build_name: dataObj[0].build_names.flat()[index],
          postcode: dataObj[0].postcodes.flat()[index],
          title: dataObj[0].titles.flat()[index],
        },
      ])
    ),
  ];

  let propertiesList = featurePropertiesObj[0];

  let list = Object.entries(propertiesList).map((item) => {
    return item[1];
  });

  let filteredNamesList = list.filter((name) => {
    return name.name.indexOf(searchInput) >= 0;
  });

  return (
    <div>
      <Modal
        visible={searchEmployeeVisible}
        onOk={handleOk}
        width="60%"
        style={{ top: 50 }}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Schließen
          </Button>,
        ]}
      >
        <label className="field a-field a-field_a1">
          <input
            onChange={getInput}
            className="field__input a-field__input"
            placeholder="z.B. Christian Willmes..."
            required
          ></input>
          <span className="a-field__label-wrap">
            <span className="a-field__label">Suche nach MitarbeiterIn...</span>
          </span>
        </label>

        <ul id={searchInput ? "employee-container" : "hide"}>
          {Object.entries(filteredNamesList).map((item, index) => {
            return (
              <div onClick={getFeatureProperties} key={index}>
                <div className="employees">
                  <div className="employee-image-container">
                    <LazyLoad key={index} overflow throttle={100} height={200}>
                      <img className="employees-image" src={item[1].img} />
                    </LazyLoad>
                  </div>

                  <p className="employees-title">{item[1].title} </p>
                  <p className="employees-name">{item[1].name}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </Modal>

      <Modal
        visible={employeeVisible}
        width="600px"
        style={{ top: 100 }}
        onCancel={handleEmployeeCancel}
        footer={[
          <Button key="back" onClick={handleEmployeeCancel}>
            Schließen
          </Button>,
        ]}
      >
        <div id="employee-text-container">
          <div id="employee-image-container">
            <img
              src={clickedFeatureProperties.img}
              id="rauminformationen-image"
            ></img>
          </div>

          <div id="rauminformationen-container">
            <div id="employee">
              <div id="rauminformationen-data">
                <div className="text-bold">
                  <h5 className="text-bold">{`${clickedFeatureProperties.title} ${clickedFeatureProperties.name}`}</h5>
                  <p>{clickedFeatureProperties.street}</p>
                  {clickedFeatureProperties.build_name}
                  <p id="inline">, Raum </p>
                  {clickedFeatureProperties.room_num}
                </div>
              </div>

              <div className="rauminformationen-grid">
                <p className="rauminformationen-type">Email:</p>
                <p className="rauminformationen-text">
                  {clickedFeatureProperties.email}
                </p>
              </div>

              <div className="rauminformationen-grid">
                <p className="rauminformationen-type">Telefonnummer:</p>
                <p className="rauminformationen-text">
                  {clickedFeatureProperties.tel_num}
                </p>
              </div>

              <div className="rauminformationen-grid">
                <p className="rauminformationen-type">Fax:</p>
                <p className="rauminformationen-text">
                  {clickedFeatureProperties.fax_num}
                </p>
              </div>

              <a
                href={clickedFeatureProperties.homepage}
                target="_blank"
                className="rauminformationen-text"
                id="webseite-link"
              >
                Weiter zur Webseite
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchEmployee;
