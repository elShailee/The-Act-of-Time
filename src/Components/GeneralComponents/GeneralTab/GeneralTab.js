import React from 'react';
import { ClickAwayListener } from '@material-ui/core';

export default function GeneralTab({ closeTab, content }) {
  return (
    <ClickAwayListener onClickAway={closeTab}>
      <div>{content}</div>
    </ClickAwayListener>
  );
}
