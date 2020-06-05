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
  const { value7, value2, value14 } = useContext(AppContext);
  const [layerClicked, isLayerClicked] = value2;
  const [searchBarVisibility, setSearchBarVisibility] = value7;
  const [search, setSearch] = value14;

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
