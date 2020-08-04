import React from 'react';
import { Paper } from '@material-ui/core';
import GeneralWindow from '../GeneralComponents/GeneralWindow/GeneralWindow';

export default function CoinsPurchaseWindow({ handleClose }) {
  return (
    <GeneralWindow handleClose={handleClose}>
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
