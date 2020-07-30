import React from 'react';
import { Paper } from '@material-ui/core';
import GeneralCloseButton from '../GeneralComponents/GeneralCloseButton/GeneralCloseButton';

export default function CoinsPurchaseWindow({ handleClose }) {
  return (
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
  );
}
