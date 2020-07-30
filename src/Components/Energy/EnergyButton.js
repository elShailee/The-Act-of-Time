import React from 'react';
import EnergyTab from './EnergyTab';
import GeneralTab from '../GeneralComponents/GeneralTab/GeneralTab';
import './EnergyButton.css';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Button } from '@material-ui/core';

export default function EnergyButton() {
  const [isEnergyTabOpen, setEnergyTabOpen] = React.useState(false);

  const handleEnergyButtonClick = () => {
    setEnergyTabOpen(!isEnergyTabOpen);
  };

  const handleEnergyTabClickAway = () => {
    setEnergyTabOpen(false);
  };

  let togglableContent = isEnergyTabOpen ? (
    <GeneralTab closeTab={handleEnergyTabClickAway} content={<EnergyTab />} />
  ) : null;

  return (
    <ClickAwayListener onClickAway={handleEnergyTabClickAway}>
      <div id="energyButtonContainer">
        <Button onClick={handleEnergyButtonClick} id="energyButton">
          Energy
        </Button>
        {togglableContent}
      </div>
    </ClickAwayListener>
  );
}
