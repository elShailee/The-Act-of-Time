import React from 'react';
import './ActionsButton.css';
import { actionsButtonTexts } from 'Texts/gameplayTexts';

export default function ActionButton() {
  return (
    <div id="actionsButtonAndTabContainer">
      <div id="actionsButton">{actionsButtonTexts.title}</div>
    </div>
  );
}
