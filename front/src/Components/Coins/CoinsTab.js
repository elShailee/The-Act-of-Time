import React, { useContext } from 'react';
import './CoinsTab.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import { coinsTabTexts } from 'Texts/gameplayTexts';

export default function CoinsTab() {
  const { mountComponents, unmountComponents } = useContext(MountedComponentsContext);

  const getMoreButtonClickHandler = () => {
    mountComponents('CoinsPurchaseWindow');
    unmountComponents('CoinsTab');
  };

  return (
    <GeneralTab id="coinsTab">
      {coinsTabTexts.coinsAmountPt1}
      XX
      {coinsTabTexts.coinsAmountPt2}
      <GeneralButton id="getMoreCoinsButton" onButtonClick={() => getMoreButtonClickHandler()}>
        {coinsTabTexts.getMore}
      </GeneralButton>
    </GeneralTab>
  );
}
