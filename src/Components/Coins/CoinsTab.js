import React from 'react';
import './CoinsTab.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { grey, yellow } from '@material-ui/core/colors';
import { Typography, Box, Card } from '@material-ui/core';
import GeneralWindow from '../GeneralComponents/GeneralWindow/GeneralWindow';
import CoinsPurchaseWindow from './CoinsPurchaseWindow';

//Styling getMoreCoinsButton
const useStyles = makeStyles({
  getMoreCoinsButton: {
    color: grey[800],
    backgroundColor: yellow[700],
    '&:hover': {
      backgroundColor: yellow[500],
    },
    textTransform: 'none',
  },
});

export default function CoinsTab(props) {
  const classes = useStyles(props);
  const [isCoinsWindowOpen, setCoinsWindowOpen] = React.useState(false);

  const CloseCoinsPurchaseWindow = () => {
    setCoinsWindowOpen(false);
  };
  const OpenCoinsPurchaseWindow = () => {
    setCoinsWindowOpen(true);
  };

  let togglablContent = isCoinsWindowOpen ? (
    <GeneralWindow content={<CoinsPurchaseWindow />} closeWindow={CloseCoinsPurchaseWindow} />
  ) : null;

  return (
    <Card id="coinsTab">
      <Typography variant={'subtitle2'}>
        <Box p={0.9}>You have XX Coins.</Box>
      </Typography>

      <Button variant="contained" className={classes.getMoreCoinsButton} onClick={OpenCoinsPurchaseWindow}>
        Get More
      </Button>

      {togglablContent}
    </Card>
  );
}
