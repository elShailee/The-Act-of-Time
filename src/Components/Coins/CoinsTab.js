import React, { useContext } from 'react';
import './CoinsTab.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { Typography, Box, Card } from '@material-ui/core';
import CoinsPurchaseWindow from './CoinsPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import { buttonsText, coins } from 'Texts/texts';

export default function CoinsTab() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);

  const isCoinsPurchaseWindowOpen = mountedComponentsDict.primaries.CoinsPurchaseWindow;

  return (
    <GeneralTab id="coinsTab">
      {coins.amountPt1}
      XX
      {coins.amountPt2}
      <GeneralButton id="getMoreCoinsButton" onButtonClick={() => mountComponents(['CoinsPurchaseWindow'])}>
        {buttonsText.getMore}
      </GeneralButton>
      {isCoinsPurchaseWindowOpen && (
        <CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => unmountComponents(['CoinsPurchaseWindow'])} />
      )}
    </GeneralTab>
  );
}
