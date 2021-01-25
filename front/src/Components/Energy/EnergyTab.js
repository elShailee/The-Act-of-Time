import React, { useContext } from 'react';
import './EnergyTab.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { energyTabTexts } from 'Texts/gameplayTexts';
import EnergyIcon from 'Images/placeholderIcon.png';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';

export default function EnergyTab() {
  const { mountComponents, unmountComponents } = useContext(MountedComponentsContext);

  const getMoreButtonClickHandler = () => {
    mountComponents('EnergyPurchaseWindow');
    unmountComponents('EnergyTab');
  };

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

      <GeneralButton id="getMoreEnergyButton" onButtonClick={() => getMoreButtonClickHandler()}>
        {energyTabTexts.getMore}
      </GeneralButton>
    </GeneralTab>
  );
}
