import React, { useContext } from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import { Button } from '@material-ui/core';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';

export default function CoinsButton() {
  const { mountedComponentsDict, MountComponents, UnmountComponents } = useContext(MountedComponentsContext);

  const isCoinsTabOpen = mountedComponentsDict.secondaries.CoinsTab;

  const handleClick = () => {
    if (isCoinsTabOpen) {
      UnmountComponents(['CoinsTab', 'CoinsPurchaseWindow']);
    } else {
      MountComponents(['CoinsTab']);
    }
  };

  return (
    <div id="coinsButtonContainer">
      <Button onClick={handleClick} id="coinsButton">
        Coins
      </Button>
      {isCoinsTabOpen && <CoinsTab handleClose={() => UnmountComponents(['CoinsTab', 'CoinsPurchaseWindow'])} />}
    </div>
  );
}
