import React, { useState, useEffect, useContext } from "react";

import OlStyle from "ol/style/Style";
import { Fill } from "ol/style";
import { AppContext } from "./AppContext";

import { buildings } from "./Layers";
import Buildings from "./Buildings";

import { Modal, Button } from "antd";

const SearchBuilding = ({ map }) => {
  const [features, setFeatures] = useState([]);

  const { value4 } = useContext(AppContext);

  const [searchBuildingVisibility, setSearchBuildingVisibility] = value4;

  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setSearchBuildingVisibility(false);
      setLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setSearchBuildingVisibility(false);
  };

  // getFeatures after first render (after performing the DOM updates) and after every update (same as "mounting" and "updating")
  useEffect(() => {
    setFeatures(buildings.getSource().getFeatures());
  }, []);

  let modalWith = "60vw";

  if (window.innerWidth <= 1270) {
    modalWith = "80vw";
  }

  return (
    <div>
      <Modal
        visible={searchBuildingVisibility}
        title="Gebäudeliste"
        width={modalWith}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Schließen
          </Button>,
        ]}
      >
        <Buildings map={map} />
      </Modal>
    </div>
  );
};

export default SearchBuilding;
