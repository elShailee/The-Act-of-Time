/* TODO:

    - Work out the red Warning from Modal
    after learned hooks and refs
*/

import React from 'react';
import './CoinsTab.css';
import Button from '@material-ui/core/Button';
import CoinsPurchaseWindow from './CoinsPurchaseWindow';
import { makeStyles } from '@material-ui/core/styles';
import { grey, yellow } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
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
  modal: {
    width: '30vw',
    height: '60vh',
    position: 'absolute',
    marginLeft: '35vw',
    marginTop: '20vh',
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

      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <CoinsPurchaseWindow />
      </Modal>
    </Card>
  );
}
