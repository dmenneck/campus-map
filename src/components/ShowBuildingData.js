import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';

import { Card, Avatar } from 'antd';

const { Meta } = Card;

const ShowBuildingData = ({ map }) => {
  const { value6, value2 } = useContext(AppContext);
  const [clickedBuildingsInformation, setclickedBuildingsInformation] = value6;
  const [layerClicked, isLayerClicked] = value2;

  const [key, setKey] = useState('tab1');

  // write a function to get type "university" and change it to "Universität"
  // ???

  // get attributes out of the clicked buildings informations stored in the state
  let name = clickedBuildingsInformation.name;
  let barrier_free = clickedBuildingsInformation.barrier_free_entrance;
  let address = clickedBuildingsInformation.address;
  let building_number = clickedBuildingsInformation.building_number;
  let image = clickedBuildingsInformation.image;

  let facilitiesName = clickedBuildingsInformation.facilities_name;
  let facilitiesLink = clickedBuildingsInformation.facilities_hyperlink;

  // initiate nameArr & linkArr to use it within tab2
  let nameArr;
  if (facilitiesName) {
    nameArr = facilitiesName.split(',');
  } else {
    return null;
  }

  let linkArr;
  if (facilitiesLink) {
    linkArr = facilitiesLink.split(',');
  } else {
    return null;
  }

  let nameAndLink = [];
  for (let i = 0; i < nameArr.length; i++) {
    nameAndLink.push({
      name: nameArr[i],
      link: linkArr[i],
    });
  }

  //check if attribute has an image. If not -> set logo (noImage) as image
  let noImage;
  if (image === null) {
    noImage =
      'https://upload.wikimedia.org/wikipedia/de/thumb/f/fe/SiegelUniKoeln.svg/1200px-SiegelUniKoeln.svg.png';
  }

  const tabList = [
    {
      key: 'tab1',
      tab: 'Gebäudeinformationen',
    },
    {
      key: 'tab2',
      tab: 'Einrichtungen',
    },
  ];

  const contentList = {
    tab1: (
      <>
        <div style={{ width: '100%', height: '225px' }}>
          <img id='cardImage' alt='example' src={image ? image : noImage} />
        </div>

        <div id='cardMeta'>
          <p className='buildingInformations'>Name: {name}</p>
          <p className='buildingInformations'>{address}</p>
          <p className='buildingInformations'>
            Gebäudenummer: {building_number}
          </p>
          <p className='buildingInformations'>
            Barrierefreiheit: {barrier_free}
          </p>
        </div>
      </>
    ),
    tab2: (
      <>
        <img
          src='https://upload.wikimedia.org/wikipedia/de/thumb/f/fe/SiegelUniKoeln.svg/1200px-SiegelUniKoeln.svg.png'
          alt='Siegel der Uni Koeln'
          id='siegelUni'
        />
        <div id='absolute'>
          <p id='tabTwoName'>{name}</p>
          <p id='tabTwoAdress'>{address}</p>
        </div>
        <div id='buildingDataLinkContainer'>
          {nameAndLink.map((item, index) => (
            <a
              href={item.link}
              className='buildingDataLink'
              key={index}
              target='_blank'
            >
              {item.name}
            </a>
          ))}
        </div>
      </>
    ),
  };

  const onTabChange = () => {
    if (key === 'tab1') {
      setKey('tab2');
    } else {
      setKey('tab1');
    }
  };

  if (layerClicked) {
    return (
      <Card
        style={{ width: 400, height: 400 }}
        tabList={tabList}
        id='buildingDataContainer'
        onTabChange={(key) => {
          onTabChange(key, 'key');
        }}
      >
        {contentList[key]}
      </Card>
    );
  } else {
    return null;
  }
};

export default ShowBuildingData;
