import React from 'react';
import { Button } from '@material-ui/core';

export default function GeneralCloseButton({ closeWindow }) {
  return (
    <Button variant={'contained'} onClick={closeWindow}>
      X
    </Button>
  );
}
