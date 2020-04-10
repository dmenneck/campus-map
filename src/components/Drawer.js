import React, { useContext } from 'react';
import { Drawer } from 'antd';
import { AppContext } from './AppContext';

import uniSchriftzug from '../data/img/uniSchriftzug.jpg';

const DrawerComponent = () => {
  const { value5 } = useContext(AppContext);
  const [isDrawerVisible, setIsDrawerVisible] = value5;

  const toggleDrawer = () => {
    setIsDrawerVisible(!true);
  };

  return (
    <>
      <Drawer
        title='Menüleiste'
        placement='right'
        onClose={toggleDrawer}
        visible={isDrawerVisible}
        width='580px'
      >
        <img src={uniSchriftzug} alt='logo' id='logoSchriftzug' />
      </Drawer>
    </>
  );
};

export default DrawerComponent;
