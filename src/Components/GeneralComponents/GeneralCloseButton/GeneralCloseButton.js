import React from 'react';
import { Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export default function GeneralCloseButton({ closeWindow }) {
  return (
    <Button variant={'contained'} onClick={closeWindow}>
      X
    </Button>
  );
}
