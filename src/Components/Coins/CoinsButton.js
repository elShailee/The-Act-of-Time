import React, { useContext } from 'react';
import CoinsTab from './CoinsTab';
import GeneralTab from '../GeneralComponents/GeneralTab/GeneralTab';
import './CoinsButton.css';
import { Button } from '@material-ui/core';
import { MountedComponentsContext } from '../../Contexts/MountedComponentsContext';

export default function CoinsButton() {
  const { componentsList, ToggleOn, ToggleOff } = useContext(MountedComponentsContext);

  let isCoinsTabOpen = componentsList.secondaries.CoinsTab;
  let togglableContent;
  if (isCoinsTabOpen) {
    togglableContent = <GeneralTab closeTab={() => ToggleOff('CoinsTab')} content={<CoinsTab />} />;
  } else togglableContent = null;

  return (
    <div id="coinsButtonContainer">
      <Button
        onClick={() => (componentsList.secondaries.CoinsTab ? ToggleOff('CoinsTab') : ToggleOn('CoinsTab'))}
        id="coinsButton"
      >
        Coins
      </Button>
      {togglableContent}
    </div>
  );
}
