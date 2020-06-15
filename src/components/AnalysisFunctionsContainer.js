import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';
import { MeasureButton } from '@terrestris/react-geo';

import ruler from '../data/img/ruler.png';

const AnalysisFunctionsContainer = ({ map }) => {
  const { value13 } = useContext(AppContext);
  const [analysisBtnsVisibility, setAnalysisBtnsVisibility] = value13;

  const toggleAnalysisBtns = () => {
    const btnOne = document.getElementById('analysis-btn-one');
    const btnTwo = document.getElementById('analysis-btn-two');
    const btnThree = document.getElementById('analysis-btn-three');

    const mobileBtnOne = document.getElementById('mobile-measure-btn-one');
    const mobileBtnTwo = document.getElementById('mobile-measure-btn-two');
    const mobileBtnThree = document.getElementById('mobile-measure-btn-three');

    const btnsContainer = document.getElementById('measure-btn-container');
    const mobileBtnsContainer = document.getElementById(
      'mobile-measure-btn-container'
    );

    btnsContainer.classList.remove('measure-btn-container');
    mobileBtnsContainer.classList.remove('measure-btn-container');

    if (analysisBtnsVisibility) {
      btnOne.classList.add('hide');
      btnTwo.classList.add('hide');
      btnThree.classList.add('hide');

      mobileBtnOne.classList.add('hide');
      mobileBtnTwo.classList.add('hide');
      mobileBtnThree.classList.add('hide');
      setAnalysisBtnsVisibility(false);
    } else {
      btnOne.classList.remove('hide');
      btnTwo.classList.remove('hide');
      btnThree.classList.remove('hide');

      mobileBtnOne.classList.remove('hide');
      mobileBtnTwo.classList.remove('hide');
      mobileBtnThree.classList.remove('hide');
      setAnalysisBtnsVisibility(true);
    }
  };

  return <div id='open-analysis-btns' onClick={toggleAnalysisBtns}></div>;
};

export default AnalysisFunctionsContainer;
