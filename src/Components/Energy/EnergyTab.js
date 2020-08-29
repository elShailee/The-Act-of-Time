//Todo:
// remove props as a parameter once materialUI is removed.

import React, { useContext } from 'react';
import './EnergyTab.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';
import EnergyPurchaseWindow from './EnergyPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { buttonsText, energy } from 'Texts/texts';

//Styling getMoreEnergyButton
const useStyles = makeStyles({
  getMoreEnergyButton: {
    maxWidth: '60px',
    minWidth: '60px',
    gridRowStart: '3',
    gridRowEnd: '5',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    backgroundColor: '#00cccc',
    '&:hover': {
      backgroundColor: '#00dddd',
    },
    textTransform: 'none',
  },
  energyInfo: {
    fontSize: '12px',
    backgroundColor: '#aadddd',
    borderRadius: '3px',
    textAlign: 'center',
  },
});

export default function EnergyTab(props) {
  const classes = useStyles(props);

  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isEnergyPurchaseWindowOpen = mountedComponentsDict.primaries.EnergyPurchaseWindow;

  return (
    <Card id="energyTab">
      <Typography variant={'subtitle2'} className={classes.energyInfo} id="timeUntillFullText">
        {energy.fullIn}
        <br />
        XX:XX:XX
      </Typography>

      <Typography variant={'subtitle2'} className={classes.energyInfo} id="energyAmountText">
        XX
        {energy.energySymbol}
      </Typography>

      <Typography variant={'subtitle2'} className={classes.energyInfo} id="rechargeRateText">
        {energy.rate}
        XX
        {energy.energyPerHour}
      </Typography>

      <Button
        variant="contained"
        className={classes.getMoreEnergyButton}
        onClick={() => mountComponents(['EnergyPurchaseWindow'])}
      >
        {buttonsText.getMore}
      </Button>

      {isEnergyPurchaseWindowOpen && (
        <EnergyPurchaseWindow handleClose={() => unmountComponents(['EnergyPurchaseWindow'])} />
      )}
    </Card>
  );
}
