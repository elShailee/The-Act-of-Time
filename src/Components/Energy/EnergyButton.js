import React, { useContext } from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import { Button } from '@material-ui/core';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { componentsTitles } from 'Texts/texts';

export default function EnergyButton() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isEnergyTabOpen = mountedComponentsDict.secondaries.EnergyTab;

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
        {componentsTitles.energyButton}
      </Button>
      {isEnergyTabOpen && (
        <EnergyTab unmountEnergyTab={() => unmountComponents(['EnergyTab', 'EnergyPurchaseWindow'])} />
      )}
    </div>
  );
}
