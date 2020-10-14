import React, { useContext } from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { coinsButtonTexts } from 'Texts/gameplayTexts';

export default function CoinsButton() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);

  const isCoinsTabOpen = mountedComponentsDict.CoinsTab;

  const onCoinsButtonClick = () => {
    if (isCoinsTabOpen) {
      unmountComponents(['CoinsTab', 'CoinsPurchaseWindow']);
    } else {
      mountComponents(['CoinsTab']);
    }
  };

  return (
    <div id="coinsButtonContainer">
      <GeneralButton id="coinsButton" uppercased outlined onButtonClick={() => onCoinsButtonClick(isCoinsTabOpen)}>
        {coinsButtonTexts.title}
      </GeneralButton>
      {isCoinsTabOpen && <CoinsTab unmountCoinsTab={() => unmountComponents(['CoinsTab', 'CoinsPurchaseWindow'])} />}
    </div>
  );
}
