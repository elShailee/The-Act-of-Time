//Todo:
// remove props as a parameter once materialUI is removed.

import React, { useContext } from 'react';
import './CoinsTab.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import { Typography, Box, Card } from '@material-ui/core';
import CoinsPurchaseWindow from './CoinsPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import { buttonsText, coins } from 'Texts/texts';

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

  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);

  const isCoinsPurchaseWindowOpen = mountedComponentsDict.primaries.CoinsPurchaseWindow;

  return (
    <GeneralTab>
      <Card id="coinsTab">
        <Typography variant={'subtitle2'}>
          <Box p={0.9}>
            {coins.amountPt1}
            XX
            {coins.amountPt2}
          </Box>
        </Typography>

        <GeneralButton id="getMoreCoinsButton" onClick={() => mountComponents(['CoinsPurchaseWindow'])}>
          {buttonsText.getMore}
        </GeneralButton>

        {isCoinsPurchaseWindowOpen && (
          <CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => unmountComponents(['CoinsPurchaseWindow'])} />
        )}
      </Card>
    </GeneralTab>
  );
}
