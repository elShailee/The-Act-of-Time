import React, { useContext } from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import { Button } from '@material-ui/core';
import { MountedComponentsContext } from '../../Contexts/MountedComponentsContext';

export default function CoinsButton() {
  const { componentsList, ToggleOn, ToggleOff } = useContext(MountedComponentsContext);

  let isCoinsTabOpen = componentsList.secondaries.CoinsTab;
  let togglableContent;
  if (isCoinsTabOpen) {
    togglableContent = <CoinsTab handleClose={() => ToggleOff(['CoinsTab', 'CoinsPurchaseWindow'])} />;
  } else togglableContent = null;

  const handleClick = ifMounted => {
    if (ifMounted) {
      ToggleOff(['CoinsTab', 'CoinsPurchaseWindow']);
    } else {
      ToggleOn(['CoinsTab']);
    }
  };

  return (
    <div id="coinsButtonContainer">
      <Button onClick={() => handleClick(isCoinsTabOpen)} id="coinsButton">
        Coins
      </Button>
      {togglableContent}
    </div>
  );
}
