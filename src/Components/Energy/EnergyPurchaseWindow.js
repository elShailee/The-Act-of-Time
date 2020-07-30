import React from 'react';
import { Paper } from '@material-ui/core';

export default function EnergyPurchaseWindow({ handleClose }) {
  return (
    <Paper
      variant="outlined"
      style={{ background: '#ffd095', borderRadius: '7px', height: '500px', width: '400px', textAlign: 'center' }}
    >
      <br />
      <br />
      <br />
      Buy Energy
      <br />
      <br />
      <br />
      <br />
      Earn Energy
    </Paper>
  );
}
