import React, { useContext } from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import { Button } from '@material-ui/core';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { energyButtonTexts } from 'Texts/gameplayTexts';

export default function EnergyButton() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isEnergyTabOpen = mountedComponentsDict.EnergyTab;

  const onEnergyButtonClick = ifMounted => {
    if (isEnergyTabOpen) {
      unmountComponents(['EnergyTab', 'EnergyPurchaseWindow']);
    } else {
      mountComponents(['EnergyTab']);
    }
  };

  return (
    <div id="energyButtonContainer">
      <Button onClick={onEnergyButtonClick} id="energyButton">
        {energyButtonTexts.title}
      </Button>
      {isEnergyTabOpen && <EnergyTab unmountEnergyTab={() => unmountComponents(['EnergyTab', 'EnergyPurchaseWindow'])} />}
    </div>
  );
}
