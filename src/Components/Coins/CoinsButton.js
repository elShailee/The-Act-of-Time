import React, { useContext } from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import GeneralButton from '../GeneralComponents/GeneralButton/GeneralButton';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { componentsTitles } from 'Texts/texts';

export default function CoinsButton() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);

  const isCoinsTabOpen = mountedComponentsDict.secondaries.CoinsTab;

  const onCoinsButtonClick = () => {
    if (isCoinsTabOpen) {
      unmountComponents(['CoinsTab', 'CoinsPurchaseWindow']);
    } else {
      mountComponents(['CoinsTab']);
    }
  };

  return (
    <div id="coinsButtonContainer">
      <GeneralButton id="coinsButton" color="#ffa500" onClick={() => handleClick(isCoinsTabOpen)}>
        {componentsTitles.coinsButton}
      </GeneralButton>
      {isCoinsTabOpen && <CoinsTab unmountCoinsTab={() => unmountComponents(['CoinsTab', 'CoinsPurchaseWindow'])} />}
    </div>
  );
}
