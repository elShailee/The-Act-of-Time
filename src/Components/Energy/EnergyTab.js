import React, { useContext } from 'react';
import './EnergyTab.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { Typography, Card } from '@material-ui/core';
import EnergyPurchaseWindow from './EnergyPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { energyTabTexts } from 'Texts/gameplayTexts';
import EnergyIcon from 'Images/placeholderIcon.png';

export default function EnergyTab() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isEnergyPurchaseWindowOpen = mountedComponentsDict.EnergyPurchaseWindow;

  const energyIcon = <img src={EnergyIcon} alt="" className="tinyIcons" />;

  return (
    <Card id="energyTab">
      <Typography variant={'subtitle2'} className="energyInfo" id="timeUntillFullText">
        {energyTabTexts.fullIn}
        <br />
        XX:XX:XX
      </Typography>

      <Typography variant={'subtitle2'} className="energyInfo" id="energyAmountText">
        XX
        {energyIcon}
      </Typography>

      <Typography variant={'subtitle2'} className="energyInfo" id="rechargeRateText">
        {energyTabTexts.rate}
        XX
        {energyIcon}
        {energyTabTexts.perHour}
      </Typography>

      <GeneralButton id="getMoreEnergyButton" onButtonClick={() => mountComponents(['EnergyPurchaseWindow'])}>
        {energyTabTexts.getMore}
      </GeneralButton>

      {isEnergyPurchaseWindowOpen && (
        <EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => unmountComponents(['EnergyPurchaseWindow'])} />
      )}
    </Card>
  );
}
