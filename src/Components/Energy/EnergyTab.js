import React, { useContext } from 'react';
import './EnergyTab.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import EnergyPurchaseWindow from './EnergyPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { energyTabTexts } from 'Texts/gameplayTexts';
import EnergyIcon from 'Images/placeholderIcon.png';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';

export default function EnergyTab() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isEnergyPurchaseWindowOpen = mountedComponentsDict.EnergyPurchaseWindow;

  const energyIcon = <img src={EnergyIcon} alt="" className="tinyIcons" />;

  return (
    <GeneralTab id="energyTab">
      <div className="energyInfo" id="timeUntillFullText">
        {energyTabTexts.fullIn}
        <br />
        XX:XX:XX
      </div>

      <div className="energyInfo" id="energyAmountText">
        XX
        {energyIcon}
      </div>

      <div className="energyInfo" id="rechargeRateText">
        {energyTabTexts.rate}
        XX
        {energyIcon}
        {energyTabTexts.perHour}
      </div>

      <GeneralButton id="getMoreEnergyButton" onButtonClick={() => mountComponents(['EnergyPurchaseWindow'])}>
        {energyTabTexts.getMore}
      </GeneralButton>

      {isEnergyPurchaseWindowOpen && (
        <EnergyPurchaseWindow
          unmountEnergyPurchaseWindow={() => unmountComponents(['EnergyPurchaseWindow'])}
        />
      )}
    </GeneralTab>
  );
}
