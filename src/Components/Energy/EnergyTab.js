import React, { useContext } from 'react';
import './EnergyTab.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { Typography, Card } from '@material-ui/core';
import EnergyPurchaseWindow from './EnergyPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { buttonsText, energy } from 'Texts/texts';

export default function EnergyTab() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isEnergyPurchaseWindowOpen = mountedComponentsDict.primaries.EnergyPurchaseWindow;

  return (
    <Card id="energyTab">
      <Typography variant={'subtitle2'} className="energyInfo" id="timeUntillFullText">
        {energy.fullIn}
        <br />
        XX:XX:XX
      </Typography>

      <Typography variant={'subtitle2'} className="energyInfo" id="energyAmountText">
        XX
        {energy.energySymbol}
      </Typography>

      <Typography variant={'subtitle2'} className="energyInfo" id="rechargeRateText">
        {energy.rate}
        XX
        {energy.energyPerHour}
      </Typography>

      <GeneralButton id="getMoreEnergyButton" onClick={() => mountComponents(['EnergyPurchaseWindow'])}>
        {buttonsText.getMore}
      </GeneralButton>

      {isEnergyPurchaseWindowOpen && (
        <EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => unmountComponents(['EnergyPurchaseWindow'])} />
      )}
    </Card>
  );
}
