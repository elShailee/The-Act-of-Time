import React from 'react';
import './ActionsButton.css';
import { componentsTitles } from 'Texts/texts';

export default function ActionButton() {
  return (
    <div id="upperRightButtonsContainer">
      <div id="actionsButton">{componentsTitles.actions}</div>
    </div>
  );
}
