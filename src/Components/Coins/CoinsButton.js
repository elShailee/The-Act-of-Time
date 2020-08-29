import React, { useContext } from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import { Button } from '@material-ui/core';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { componentsTitles } from 'Texts/texts';

export default function CoinsButton() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);

  const isCoinsTabOpen = mountedComponentsDict.secondaries.CoinsTab;

  const handleClick = () => {
    if (isCoinsTabOpen) {
      unmountComponents(['CoinsTab', 'CoinsPurchaseWindow']);
    } else {
      mountComponents(['CoinsTab']);
    }
  };

  return (
    <div id="coinsButtonContainer">
      <Button onClick={handleClick} id="coinsButton">
        {componentsTitles.coinsButton}
      </Button>
      {isCoinsTabOpen && <CoinsTab handleClose={() => unmountComponents(['CoinsTab', 'CoinsPurchaseWindow'])} />}
    </div>
  );
}
