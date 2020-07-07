import React from 'react';
import './CoinsTab.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { grey, yellow } from '@material-ui/core/colors';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles({
  coinsTabButton: {
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
    setOpen(!open);
  };

  return (
    <div id="coinsTab">
      You have XX Coins.
      <br />
      <Button
        variant="contained"
        className={classes.coinsTabButton + ' designAdditionsForGetMoreButton'}
        onClick={handleToggle}
      >
        Get More
      </Button>{' '}
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        Bananas
      </Backdrop>
    </div>
  );
}
