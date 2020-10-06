import React, { useContext } from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import { Button } from '@material-ui/core';
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
      <Button onClick={onCoinsButtonClick} id="coinsButton">
        {coinsButtonTexts.title}
      </Button>
      {isCoinsTabOpen && <CoinsTab unmountCoinsTab={() => unmountComponents(['CoinsTab', 'CoinsPurchaseWindow'])} />}
    </div>
  );
}
