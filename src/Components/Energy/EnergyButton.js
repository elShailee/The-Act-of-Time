import React, { useContext } from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { componentsTitles } from 'Texts/texts';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';

export default function EnergyButton() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isEnergyTabOpen = mountedComponentsDict.secondaries.EnergyTab;

  const onEnergyButtonClick = () => {
    if (isEnergyTabOpen) {
      unmountComponents(['EnergyTab', 'EnergyPurchaseWindow']);
    } else {
      mountComponents(['EnergyTab']);
    }
  };

  return (
    <div id="energyButtonContainer">
      <GeneralButton className="uppercased bordered" onButtonClick={onEnergyButtonClick} id="energyButton">
        {componentsTitles.energyButton}
      </GeneralButton>
      {isEnergyTabOpen && (
        <EnergyTab unmountEnergyTab={() => unmountComponents(['EnergyTab', 'EnergyPurchaseWindow'])} />
      )}
    </div>
  );
}
