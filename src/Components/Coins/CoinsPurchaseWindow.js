import React from 'react';
import { Paper } from '@material-ui/core';
import GeneralWindow from 'Components/GeneralComponents/GeneralWindow';

export default function CoinsPurchaseWindow({ unmountCoinsPurchaseWindow }) {
  return (
    <GeneralWindow unmountGeneralWindow={unmountCoinsPurchaseWindow}>
      <Paper
        variant="outlined"
        style={{ background: '#ffd095', borderRadius: '7px', height: '500px', width: '400px', textAlign: 'center' }}
      >
        <br />
        <br />
        <br />
        Buy Coins
        <br />
        <br />
        <br />
        <br />
        Earn Coins
      </Paper>
    </GeneralWindow>
  );
}
