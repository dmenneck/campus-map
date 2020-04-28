import React, { useEffect, useContext } from 'react';
import { AppContext } from './AppContext';
import { notification, message } from 'antd';
import wickelraum from '../data/img/wickelraum.png';
import stillraum from '../data/img/stillraum.png';
import elternKindRaum from '../data/img/elternKindRaum.png';
import kita from '../data/img/kita.png';
import spielplatz from '../data/img/spielplatz.png';
import unisex from '../data/img/unisex.png';

const Legend = () => {
  const { value10 } = useContext(AppContext);
  const [legendeVisibility, setLegendeVisibilty] = value10;

  const openNotification = (placement) => {
    notification.open({
      message: null,
      description: (
        <div>
          <p className='legende-text-title'>Parkplätze</p>
          <div className='legendeGridOne'>
            <img src={wickelraum} alt='' className='legende-images' />
            <p className='legende-text'>öffentlich</p>
            <img src={wickelraum} alt='' className='legende-images' />
            <p className='legende-text'>Uni.angeh.</p>
            <img src={wickelraum} alt='' className='legende-images' />
            <p className='legende-text'>Klinik</p>
          </div>
          <p className='legende-text-title'>Familien-Campus-Plan</p>
          <div className='legendeGridTwo'>
            <img src={wickelraum} alt='' className='legende-images' />
            <p className='legende-text'>Wickelraum</p>
            <img src={stillraum} alt='' className='legende-images' />
            <p className='legende-text'>Stillraum</p>
            <img src={elternKindRaum} alt='' className='legende-images' />
            <p className='legende-text'>Eltern-Kind-Raum</p>
            <img src={kita} alt='' className='legende-images' />
            <p className='legende-text'>Kindertagesstätte</p>
            <img src={spielplatz} alt='' className='legende-images' />
            <p className='legende-text'>Spielplatz</p>
            <img src={unisex} alt='' className='legende-images' />
            <p className='legende-text'>Unisex-WC</p>
          </div>
        </div>
      ),
      placement,
      duration: 0,
    });
  };

  if (legendeVisibility) {
    openNotification('bottomLeft');
    setLegendeVisibilty(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      openNotification('bottomLeft');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      message.info('Willkommen auf dem Lageplan der UzK');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return <div></div>;
};

export default Legend;
