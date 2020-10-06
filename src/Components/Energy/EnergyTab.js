//Todo:
// remove props as a parameter once materialUI is removed.

import React, { useContext } from 'react';
import './EnergyTab.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';
import EnergyPurchaseWindow from './EnergyPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { energyTabTexts } from 'Texts/gameplayTexts';
import EnergyIcon from 'Images/placeholderIcon.png';

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
  const isEnergyPurchaseWindowOpen = mountedComponentsDict.EnergyPurchaseWindow;

  const energyIcon = <img src={EnergyIcon} alt="" className="tinyIcons" />;

  return (
    <Card id="energyTab">
      <Typography variant={'subtitle2'} className={classes.energyInfo} id="timeUntillFullText">
        {energyTabTexts.fullIn}
        <br />
        XX:XX:XX
      </Typography>

      <Typography variant={'subtitle2'} className={classes.energyInfo} id="energyAmountText">
        XX
        {energyIcon}
      </Typography>

      <Typography variant={'subtitle2'} className={classes.energyInfo} id="rechargeRateText">
        {energyTabTexts.rate}
        XX
        {energyIcon}
        {energyTabTexts.perHour}
      </Typography>

      <Button
        variant="contained"
        className={classes.getMoreEnergyButton}
        onClick={() => mountComponents(['EnergyPurchaseWindow'])}
      >
        {energyTabTexts.getMore}
      </Button>

      {isEnergyPurchaseWindowOpen && (
        <EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => unmountComponents(['EnergyPurchaseWindow'])} />
      )}
    </Card>
  );
}
