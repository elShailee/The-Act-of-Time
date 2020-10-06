import React from 'react';
import './SeenButton.css';
import { seenButtonTexts } from 'Texts/gameplayTexts';

export default function SeenButton() {
  return <div id="seenButton">{seenButtonTexts.title}</div>;
}
