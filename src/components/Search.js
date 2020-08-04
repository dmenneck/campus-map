import React, { useContext, useState, useEffect } from "react";
import { Input } from "antd";
import { AppContext } from "./AppContext";
import { buildings } from "./Layers";
import { source } from "./Layers";
import Suche from "../data/img/suche.png";
import Style from "ol/style/Style";
import { Fill, Stroke } from "ol/style";

import test4 from "../data/img/test4.PNG";
import test5 from "../data/img/test5.PNG";
import close from "../data/img/close.png";

const { Search } = Input;

const SearchComponent = ({ map }) => {
  const { value7, value2, value14, value27, value28 } = useContext(AppContext);
  const [layerClicked, isLayerClicked] = value2;
  const [searchBarVisibility, setSearchBarVisibility] = value7;
  const [searchBuilding, setSearchBuilding] = value14;
  const [buildingSearchBar, setBuildingSearchBar] = value27;
  const [searchPerson, setSearchPerson] = value28;

  const [features, setFeatures] = useState([]);
  const [clickedFeature, setClickedFeature] = useState("");

  const clickedBuildingsStyle = new Style({
    stroke: new Stroke({ color: "#af111d", width: 6 }),
    fill: new Fill({ color: "#4a657d" }),
  });

  // get features async
  useEffect(() => {
    setTimeout(() => {
      setFeatures(buildings.getSource().getFeatures());
    }, 1000);
  }, []);

  let names = features.map((item) => item.values_.name);

  const updateSearchBuilding = (e) => {
    setSearchBuilding(e.target.value);
  };

  const updateSearchPerson = (e) => {
    setSearchPerson(e.target.value);
  };

  let filteredNames = names.filter((name) => {
    return (
      name.toLowerCase().indexOf(searchBuilding.toLocaleLowerCase()) !== -1
    );
  });

  const filteredNamesGetFeatures = (e) => {
    let clickedBuilding = e.target.innerHTML; // string

    let mappedFeatures = features.map((item) => {
      if (clickedBuilding === item.get("name")) {
        setClickedFeature(item.getGeometry());

        // get the clicked feature and set view based on the feature extent
        map.getView().fit(item.getGeometry(), map.getSize());

        console.log(item);

        // clear style of previous clicked building
        item.setStyle(null);
        // setStyle of currently clicked building
        item.setStyle(clickedBuildingsStyle);
        // clear style after 3s
        setTimeout(() => {
          item.setStyle(null);
        }, 1500);
      }
    });
  };

  const resetInput = () => {
    setSearchBuilding("");
    setSearchPerson("");
  };

  const toggleSearchInputs = () => {
    setSearchBuilding("");
    setSearchPerson("");

    if (buildingSearchBar) {
      setBuildingSearchBar(false);
    } else {
      setBuildingSearchBar(true);
    }
  };

  if (searchBarVisibility) {
    return (
      <div id="search">
        <div id="search-container">
          <Search
            id="searchBar"
            placeholder={
              buildingSearchBar
                ? "Suche nach Gebäuden..."
                : "Suche nach Mitarbeiter*innen..."
            }
            onChange={
              buildingSearchBar ? updateSearchBuilding : updateSearchPerson
            }
            style={{ width: 400, height: 50 }}
            value={buildingSearchBar ? searchBuilding : searchPerson}
          />

          <button
            className="toggle-person-buildings-searchbar"
            onClick={toggleSearchInputs}
            style={{
              backgroundImage: `url(${buildingSearchBar ? test5 : test4})`,
              backgroundSize: "99% 99%",
            }}
          ></button>
          <button
            className="reset-search-input"
            onClick={resetInput}
            style={{
              backgroundImage: `url(${close})`,
              backgroundSize: "99% 99%",
            }}
          ></button>
        </div>

        <ul
          id={searchBuilding ? "filtered-names-container-max-height" : "hide"}
        >
          {filteredNames.map((name, index) => (
            <li
              key={index}
              className="mapped-filtered-names unselectable"
              onClick={filteredNamesGetFeatures}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default SearchComponent;
