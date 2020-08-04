import React, { useContext } from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import { Button } from '@material-ui/core';
import { MountedComponentsContext } from '../../Contexts/MountedComponentsContext';

export default function EnergyButton() {
  const { componentsList, ToggleOn, ToggleOff } = useContext(MountedComponentsContext);

  let isEnergyTabOpen = componentsList.secondaries.EnergyTab;
  let togglableContent;
  if (isEnergyTabOpen) {
    togglableContent = <EnergyTab handleClose={() => ToggleOff(['EnergyTab', 'EnergyPurchaseWindow'])} />;
  } else togglableContent = null;

  const handleClick = ifMounted => {
    if (ifMounted) {
      ToggleOff(['EnergyTab', 'EnergyPurchaseWindow']);
    } else {
      ToggleOn(['EnergyTab']);
    }
  };

  return (
    <div id="energyButtonContainer">
      <Button onClick={() => handleClick(isEnergyTabOpen)} id="energyButton">
        Energy
      </Button>
      {togglableContent}
    </div>
  );
}
