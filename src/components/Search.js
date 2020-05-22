import React, { useContext, useState, useEffect } from "react";
import { Input } from "antd";
import { AppContext } from "./AppContext";
import { buildings } from "./Layers";
import { source } from "./Layers";
import Suche from "../data/img/suche.png";
import Style from "ol/style/Style";
import { Fill, Stroke } from "ol/style";

const { Search } = Input;

const SearchComponent = ({ map }) => {
  const { value7, value2 } = useContext(AppContext);
  const [searchBarVisibility, setSearchBarVisibility] = value7;
  const [features, setFeatures] = useState([]);
  const [search, setSearch] = useState("");
  const [clickedFeature, setClickedFeature] = useState("");

  const clickedBuildingsStyle = new Style({
    fill: new Fill({ color: "#a5b6c7" }),
    stroke: new Stroke({ color: "rgba(73, 139, 170, 0.9)", width: 1 }),
  });

  // get Features async
  useEffect(() => {
    setTimeout(() => {
      setFeatures(buildings.getSource().getFeatures());
    }, 1000);
  }, []);

  let names = features.map((item) => item.values_.name);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  let filteredNames = names.filter((name) => {
    return name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
  });

  const filteredNamesGetFeatures = (e) => {
    let clickedBuilding = e.target.innerHTML; // string

    let mappedFeatures = features.map((item) => {
      if (clickedBuilding === item.get("name")) {
        setClickedFeature(item.getGeometry());

        // get the clicked feature and set view based on the feature extent
        map.getView().fit(item.getGeometry(), map.getSize());

        item.setStyle(null);
        item.setStyle(clickedBuildingsStyle);
      }
    });
  };

  const resetInput = () => {
    setSearch("");
  };

  if (searchBarVisibility) {
    return (
      <div id="search">
        <div id="search-container">
          <Search
            id="searchBar"
            placeholder="Suche nach Gebäuden, Räumen, ..."
            onChange={updateSearch}
            style={{ width: 400, height: 50 }}
            value={search}
          />
          <div id="searchbar-btns">
            <button className="reset-search-input" onClick={resetInput}>
              X
            </button>
          </div>
        </div>

        <ul id={search ? "filtered-names-container-max-height" : "hide"}>
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
