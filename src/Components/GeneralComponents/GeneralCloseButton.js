import React from 'react';
import { Button } from '@material-ui/core';

export default function GeneralCloseButton({ unmountWindow }) {
  return (
    <Button variant="contained" onClick={unmountWindow}>
      X
    </Button>
  );
}
