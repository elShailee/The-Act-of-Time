import React from 'react';
import GeneralWindow from 'Components/GeneralComponents/GeneralWindow';

export default function CoinsPurchaseWindow({ unmountCoinsPurchaseWindow, ...props }) {
  return (
    <GeneralWindow unmountGeneralWindow={unmountCoinsPurchaseWindow} {...props}>
      <br />
      <br />
      <br />
      Buy Coins
      <br />
      <br />
      <br />
      <br />
      Earn Coins
    </GeneralWindow>
  );
}
