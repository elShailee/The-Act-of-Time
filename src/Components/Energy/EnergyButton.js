import React, { useContext } from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import { Button } from '@material-ui/core';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';

export default function EnergyButton() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isEnergyTabOpen = mountedComponentsDict.secondaries.EnergyTab;

  const handleClick = ifMounted => {
    if (isEnergyTabOpen) {
      unmountComponents(['EnergyTab', 'EnergyPurchaseWindow']);
    } else {
      mountComponents(['EnergyTab']);
    }
  };

  return (
    <div id="energyButtonContainer">
      <Button onClick={handleClick} id="energyButton">
        Energy
      </Button>
      {isEnergyTabOpen && <EnergyTab handleClose={() => unmountComponents(['EnergyTab', 'EnergyPurchaseWindow'])} />}
    </div>
  );
}
