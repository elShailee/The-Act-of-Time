//Todo:
// remove props as a parameter once materialUI is removed.

import React, { useContext } from 'react';
import './CoinsTab.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import { Typography, Box, Card } from '@material-ui/core';
import CoinsPurchaseWindow from './CoinsPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';

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

  const { mountedComponentsDict, MountComponents, UnmountComponents } = useContext(MountedComponentsContext);

  const isCoinsPurchaseWindowOpen = mountedComponentsDict.primaries.CoinsPurchaseWindow;

  return (
    <GeneralTab>
      <Card id="coinsTab">
        <Typography variant={'subtitle2'}>
          <Box p={0.9}>You have XX Coins.</Box>
        </Typography>

        <Button
          variant="contained"
          className={classes.getMoreCoinsButton}
          onClick={() => MountComponents(['CoinsPurchaseWindow'])}
        >
          Get More
        </Button>

        {isCoinsPurchaseWindowOpen && (
          <CoinsPurchaseWindow handleClose={() => UnmountComponents(['CoinsPurchaseWindow'])} />
        )}
      </Card>
    </GeneralTab>
  );
}
