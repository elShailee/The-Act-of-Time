import React, { useContext } from 'react';
import './EnergyTab.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import EnergyPurchaseWindow from './EnergyPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { buttonsText, energy } from 'Texts/texts';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';

export default function EnergyTab() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(
    MountedComponentsContext
  );
  const isEnergyPurchaseWindowOpen = mountedComponentsDict.primaries.EnergyPurchaseWindow;

  return (
    <GeneralTab id="energyTab">
      <div className="energyInfo" id="timeUntillFullText">
        {energy.fullIn}
        <br />
        XX:XX:XX
      </div>

      <div className="energyInfo" id="energyAmountText">
        XX
        {energy.energySymbol}
      </div>

      <div className="energyInfo" id="rechargeRateText">
        {energy.rate}
        XX
        {energy.energyPerHour}
      </div>

      <GeneralButton
        id="getMoreEnergyButton"
        onButtonClick={() => mountComponents(['EnergyPurchaseWindow'])}
      >
        {buttonsText.getMore}
      </GeneralButton>

      {isEnergyPurchaseWindowOpen && (
        <EnergyPurchaseWindow
          unmountEnergyPurchaseWindow={() => unmountComponents(['EnergyPurchaseWindow'])}
        />
      )}
    </GeneralTab>
  );
}
