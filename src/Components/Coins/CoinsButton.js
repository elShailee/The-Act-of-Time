import React from 'react';
import CoinsTab from './CoinsTab';
import GeneralTab from '../GeneralComponents/GeneralTab/GeneralTab';
import './CoinsButton.css';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Button } from '@material-ui/core';

export default function CoinsButton() {
  const [isCoinsTabOpen, setCoinsTabOpen] = React.useState(false);

  const handleCoinsButtonClick = () => {
    setCoinsTabOpen(!isCoinsTabOpen);
  };

  const handleCoinsTabClickAway = () => {
    setCoinsTabOpen(false);
  };

  let togglableContent = isCoinsTabOpen ? (
    <GeneralTab closeTab={handleCoinsTabClickAway} content={<CoinsTab />} />
  ) : null;

  return (
    <ClickAwayListener onClickAway={handleCoinsTabClickAway}>
      <div id="coinsButtonContainer">
        <Button onClick={handleCoinsButtonClick} id="coinsButton">
          Coins
        </Button>
        {togglableContent}
      </div>
    </ClickAwayListener>
  );
}
