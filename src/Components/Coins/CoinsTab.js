import React, { useContext } from 'react';
import './CoinsTab.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import CoinsPurchaseWindow from './CoinsPurchaseWindow';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import { coinsTabTexts } from 'Texts/gameplayTexts';

export default function CoinsTab() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);

  const isCoinsPurchaseWindowOpen = mountedComponentsDict.CoinsPurchaseWindow;

  return (
    <GeneralTab id="coinsTab">
      {coinsTabTexts.coinsAmountPt1}
      XX
      {coinsTabTexts.coinsAmountPt2}
      <GeneralButton id="getMoreCoinsButton" onButtonClick={() => mountComponents(['CoinsPurchaseWindow'])}>
        {coinsTabTexts.getMore}
      </GeneralButton>
      {isCoinsPurchaseWindowOpen && (
        <CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => unmountComponents(['CoinsPurchaseWindow'])} />
      )}
    </GeneralTab>
  );
}
