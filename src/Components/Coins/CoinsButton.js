import React from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Button } from '@material-ui/core';

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      {/* ClickAwayListener Has to contain only one component, hence the blank div*/}
      <div>
        <Button onClick={handleClick} id="coinsButton">
          Coins
        </Button>
        {open ? <CoinsTab /> : null}
      </div>
    </ClickAwayListener>
  );
}
