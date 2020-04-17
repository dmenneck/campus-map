import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';

import { LayerTree } from '@terrestris/react-geo';
import { LayerGroup } from './LayerGroup';

import SearchBuilding from './AgFeatureGrid';

import { Button } from 'antd';
import { Tabs, Select } from 'antd';
const { TabPane } = Tabs;

export const FunctionalButtons = ({ map }) => {
  const { value5, value1 } = useContext(AppContext);
  const [isDrawerVisible, setIsDrawerVisible] = value5;

  const [areFunctionalBtnsVisible, setFunctionalBtnsVisibility] = value1;

  const [tabPosition, setTabPosition] = useState('bottom');

  const toggleDrawer = () => {
    setIsDrawerVisible(true);
  };

  if (areFunctionalBtnsVisible) {
    return (
      <div>
        <div id='BtnWrapper'>
          <Tabs defaultActiveKey='2' tabPosition={tabPosition}>
            <TabPane tab={<span>Grundkarten</span>} key='1'>
              <LayerTree map={map} layerGroup={LayerGroup} />
            </TabPane>
            <TabPane tab={<span>Layer</span>} key='2'>
              <button className='dropdowns'></button>
              <button className='dropdowns'></button>
              <button className='dropdowns'></button>
            </TabPane>

            <TabPane tab={<span>Suche</span>} key='3'>
              <SearchBuilding />
            </TabPane>
            <TabPane tab={<span>Infos</span>} key='4'>
              <Button onClick={toggleDrawer} className='dropdowns'></Button>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
