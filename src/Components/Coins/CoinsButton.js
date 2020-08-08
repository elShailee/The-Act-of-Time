import React, { useContext } from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import { MountedComponentsContext } from '../../Contexts/MountedComponentsContext';
import GeneralButton from '../GeneralComponents/GeneralButton/GeneralButton';

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
      <GeneralButton id="coinsButton" color="#ffa500" onClick={() => handleClick(isCoinsTabOpen)}>
        Coins
      </GeneralButton>
      {togglableContent}
    </div>
  );
}
