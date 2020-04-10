import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';

import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

function ShowBuildingData({ map }) {
  const { value6, value2 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;
  const [layerClicked, isLayerClicked] = value2;

  // write a function to get type "university" and change it to "Universität"

  let name = clickedBuildingsInformation.name;
  let barrier_free = clickedBuildingsInformation.barrier_free_entrance;
  let address = clickedBuildingsInformation.address;
  let building_number = clickedBuildingsInformation.building_number;
  let image = clickedBuildingsInformation.image;

  let noImage;
  if (image === null) {
    console.log('no image');
    noImage =
      'https://distributed-campus.org/unikoelninternational/images/uni_logos/uni_logo.png';
  } else {
    console.log('image');
  }

  const closeWindow = () => {
    console.log('window closed');
  };

  if (layerClicked) {
    console.log(clickedBuildingsInformation);

    return (
      <Card
        style={{ width: 400 }}
        cover={<img alt='example' src={image ? image : noImage} />}
        actions={[
          <SettingOutlined key='setting' />,
          <EditOutlined key='edit' />,
          <EllipsisOutlined key='ellipsis' />,
        ]}
        id='buildingDataContainer'
      >
        <Meta
          avatar={
            <Avatar src='https://upload.wikimedia.org/wikipedia/de/thumb/f/fe/SiegelUniKoeln.svg/1200px-SiegelUniKoeln.svg.png' />
          }
          title={name}
          description={address}
        />
      </Card>
    );
  } else {
    return null;
  }
}

export default ShowBuildingData;
