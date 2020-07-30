import React from 'react';
import './EnergyTab.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';
import GeneralWindow from '../GeneralComponents/GeneralWindow/GeneralWindow';
import EnergyPurchaseWindow from './EnergyPurchaseWindow';

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
  const [isEnergyWindowOpen, setEnergyWindowOpen] = React.useState(false);

  const CloseEnergyPurchaseWindow = () => {
    setEnergyWindowOpen(false);
  };
  const OpenEnergyPurchaseWindow = () => {
    setEnergyWindowOpen(true);
  };

  let togglablContent = isEnergyWindowOpen ? (
    <GeneralWindow content={<EnergyPurchaseWindow />} closeWindow={CloseEnergyPurchaseWindow} />
  ) : null;

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

      <Button variant="contained" className={classes.getMoreEnergyButton} onClick={OpenEnergyPurchaseWindow}>
        Get More
      </Button>

      {togglablContent}
    </Card>
  );
}
