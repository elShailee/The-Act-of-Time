import React from 'react';
import './CoinsTab.css';
import Button from '@material-ui/core/Button';
import CoinsPurchaseWindow from './CoinsPurchaseWindow';
import { makeStyles } from '@material-ui/core/styles';
import { grey, yellow } from '@material-ui/core/colors';
import Backdrop from '@material-ui/core/Backdrop';
import { Typography, Box, Card } from '@material-ui/core';

//Styling openCoinsPurchaseWindowButton
const useStyles = makeStyles({
  openCoinsPurchaseWindowButton: {
    color: grey[800],
    backgroundColor: yellow[700],
    '&:hover': {
      backgroundColor: yellow[500],
    },
    textTransform: 'none',
  },
  backdrop: {
    zIndex: 1,
  },
});

export default function CoinsTab(props) {
  const classes = useStyles(props);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(true);
  };

  return (
    <Card id="coinsTab">
      <Typography variant={'subtitle2'}>
        <Box p={0.9}>You have XX Coins.</Box>
      </Typography>

      <Button
        variant="contained"
        className={classes.openCoinsPurchaseWindowButton + ' designAdditionsForGetMoreButton'}
        onClick={handleToggle}
      >
        Get More
      </Button>

      <Backdrop className={classes.backdrop} open={open}>
        <CoinsPurchaseWindow handleClose={handleClose} />
      </Backdrop>
    </Card>
  );
}
