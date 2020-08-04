import React, { useContext } from 'react';
import './CoinsTab.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import { Typography, Box, Card } from '@material-ui/core';
import CoinsPurchaseWindow from './CoinsPurchaseWindow';
import { MountedComponentsContext } from '../../Contexts/MountedComponentsContext';
import GeneralTab from '../GeneralComponents/GeneralTab/GeneralTab';

//Styling getMoreCoinsButton
const useStyles = makeStyles({
  getMoreCoinsButton: {
    backgroundColor: yellow[700],
    '&:hover': {
      backgroundColor: yellow[500],
    },
    textTransform: 'none',
  },
});

export default function CoinsTab(props) {
  const classes = useStyles(props);

  const { componentsList, ToggleOn, ToggleOff } = useContext(MountedComponentsContext);

  let isCoinsPurchaseWindowOpen = componentsList.primaries.CoinsPurchaseWindow;
  let togglablContent;
  if (isCoinsPurchaseWindowOpen) {
    togglablContent = <CoinsPurchaseWindow handleClose={() => ToggleOff(['CoinsPurchaseWindow'])} />;
  } else togglablContent = null;

  return (
    <GeneralTab>
      <Card id="coinsTab">
        <Typography variant={'subtitle2'}>
          <Box p={0.9}>You have XX Coins.</Box>
        </Typography>

        <Button
          variant="contained"
          className={classes.getMoreCoinsButton}
          onClick={() => ToggleOn(['CoinsPurchaseWindow'])}
        >
          Get More
        </Button>

        {togglablContent}
      </Card>
    </GeneralTab>
  );
}
