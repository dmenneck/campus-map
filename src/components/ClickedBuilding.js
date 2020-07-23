import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import ShowBuildingData from "./ShowBuildingData";
import { entrances } from "./Layers";
import entrancesData from "../data/geoData/entrances.geojson";
import GeoJSON from "ol/format/GeoJSON";

function ClickedBuilding({ map }) {
  const {
    value6,
    value2,
    value4,
    value14,
    value8,
    value15,
    value17,
    value19,
    value24,
  } = useContext(AppContext);
  const [menuContainerVisibility, setMenuContainerVisibility] = value8;
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;
  const [searchBuildingVisibility, setSearchBuildingVisibility] = value4;
  const [layerClicked, isLayerClicked] = value2;
  const [search, setSearch] = value14;
  const [burgerOpen, setBurgerOpen] = value15;
  const [entrancesLegend, setEntrancesLegend] = value17;
  const [btnClicked, setBtnClicked] = value19;
  const [roomsContainer, setRoomsContainer] = value24;

  let data = "";
  async function test() {
    const response = await fetch(entrancesData);
    const json = await response.json();
    data = json;
  }

  // get attributes from building layer
  let properties = "";

  function OnMouseMove(e) {
    var coordinate = e.coordinate;
    var pixel = map.getPixelFromCoordinate(coordinate);

    test();

    const dataValues = map.forEachFeatureAtPixel(pixel, function (feature) {
      properties = feature.getProperties();

      const data_features = data.features;

      let building_number = feature.get("building_number");

      if (data_features === undefined) {
        //console.log("undefined");
      } else {
        const entranceFeatureToAdd = data_features.filter(
          (item) => item.properties.build_num === building_number
        );

        // get source of entrance layer
        const entrance_layer_source = map.getLayers().getArray()[4].getSource();
        // console.log(entrance_layer_source);

        // transform object to GeoJSON
        const format = new GeoJSON();
        const olFeatures = entranceFeatureToAdd.map((feature) =>
          format.readFeature(feature)
        );

        // only show entrances legend if there is an feature to show
        if (olFeatures.length === 0) {
          //console.log('no feature');
          setEntrancesLegend(false);
        } else {
          setEntrancesLegend(true);
        }

        // clear source so that only the clicked building entrances appear
        entrance_layer_source.clear();
        // add features to source
        entrance_layer_source.addFeatures(olFeatures);
      }

      setclickedBuildingsInformation(properties);
      isLayerClicked(true);
      e.preventDefault();
    });

    setSearchBuildingVisibility(false);
    setSearch("");
    setBurgerOpen(false);
    setMenuContainerVisibility(false);
    setRoomsContainer(false);

    setBtnClicked(false);

    // on click on map (outside of a feature) setVisible of the current visible layer to false
    const rooms_one_layer = map.getLayers().getArray()[6];
    const rooms_two_layer = map.getLayers().getArray()[7];
    const rooms_three_layer = map.getLayers().getArray()[8];
    const rooms_four_layer = map.getLayers().getArray()[10];
    rooms_one_layer.setVisible(false);
    rooms_two_layer.setVisible(false);
    rooms_three_layer.setVisible(false);
    rooms_four_layer.setVisible(false);

    // check wether layer (one of the buidling polygons) is clicked or not
    if (!dataValues && !properties) {
      isLayerClicked(false);
    } else {
      isLayerClicked(true);
    }
  }

  map.on("click", OnMouseMove);

  return (
    <div>
      <ShowBuildingData map={map} />
    </div>
  );
}

export default ClickedBuilding;
