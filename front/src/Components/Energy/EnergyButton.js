import React, { useContext } from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { energyButtonTexts } from 'Texts/gameplayTexts';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';

export default function EnergyButton() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isEnergyTabOpen = mountedComponentsDict.EnergyTab;

  const onEnergyButtonClick = () => {
    if (isEnergyTabOpen) {
      unmountComponents('EnergyTab');
    } else {
      mountComponents('EnergyTab');
    }
  };

  return (
    <div id="energyButtonContainer">
      <GeneralButton uppercased outlined onButtonClick={onEnergyButtonClick} id="energyButton">
        {energyButtonTexts.title}
      </GeneralButton>
      {isEnergyTabOpen && <EnergyTab />}
    </div>
  );
}
