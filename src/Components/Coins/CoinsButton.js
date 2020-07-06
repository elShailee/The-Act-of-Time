import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';

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
      <div>
        <div onClick={handleClick} id="coinsButton">
          Coins
        </div>
        {open ? <CoinsTab /> : null}
      </div>
    </ClickAwayListener>
  );
}
