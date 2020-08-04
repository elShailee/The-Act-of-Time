import React, { useContext } from 'react';
import './EnergyTab.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';
import EnergyPurchaseWindow from './EnergyPurchaseWindow';
import { MountedComponentsContext } from '../../Contexts/MountedComponentsContext';

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

  const { componentsList, ToggleOn, ToggleOff } = useContext(MountedComponentsContext);

  let isEnergyPurchaseWindowOpen = componentsList.primaries.EnergyPurchaseWindow;
  let togglablContent;
  if (isEnergyPurchaseWindowOpen) {
    togglablContent = <EnergyPurchaseWindow handleClose={() => ToggleOff(['EnergyPurchaseWindow'])} />;
  } else togglablContent = null;

  return (
    <Card id="energyTab">
      <Typography variant={'subtitle2'} className={classes.energyInfo} id="timeUntillFullText">
        Full Energy in:
        <br />
        XX:XX:XX
      </Typography>

      <Typography variant={'subtitle2'} className={classes.energyInfo} id="energyAmountText">
        XX♠
      </Typography>

      <Typography variant={'subtitle2'} className={classes.energyInfo} id="rechargeRateText">
        Rate: XX♠/h
      </Typography>

      <Button
        variant="contained"
        className={classes.getMoreEnergyButton}
        onClick={() => ToggleOn(['EnergyPurchaseWindow'])}
      >
        Get More
      </Button>

      {togglablContent}
    </Card>
  );
}
