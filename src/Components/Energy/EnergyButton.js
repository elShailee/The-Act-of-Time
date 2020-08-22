import React, { useContext } from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import { Button } from '@material-ui/core';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';

export default function EnergyButton() {
  const { mountedComponentsDict, MountComponents, UnmountComponents } = useContext(MountedComponentsContext);
  const isEnergyTabOpen = mountedComponentsDict.secondaries.EnergyTab;

  const handleClick = ifMounted => {
    if (isEnergyTabOpen) {
      UnmountComponents(['EnergyTab', 'EnergyPurchaseWindow']);
    } else {
      MountComponents(['EnergyTab']);
    }
  };

  return (
    <div id="energyButtonContainer">
      <Button onClick={handleClick} id="energyButton">
        Energy
      </Button>
      {isEnergyTabOpen && <EnergyTab handleClose={() => UnmountComponents(['EnergyTab', 'EnergyPurchaseWindow'])} />}
    </div>
  );
}
