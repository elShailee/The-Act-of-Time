import React from 'react';
import { Paper, Box } from '@material-ui/core';
import GeneralCloseButton from '../GeneralComponents/GeneralCloseButton/GeneralCloseButton';

export default function CoinsPurchaseWindow({ handleClose }) {
  return (
    <Paper variant="outlined" style={{ background: '#ffd095', borderRadius: '7px' }}>
      <Box width="30vw" height="60vh">
        <br />
        <GeneralCloseButton closeWindow={handleClose} />
        <br />
        <br />
        Buy Coins
        <br />
        <br />
        <br />
        <br />
        Earn Coins
      </Box>
    </Paper>
  );
}
