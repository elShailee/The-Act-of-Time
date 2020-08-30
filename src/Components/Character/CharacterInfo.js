import React from 'react';
import './CharacterInfo.css';
import { componentsTitles } from 'Texts/texts';

export default function CharacterInfo() {
  return (
    <div id="characterInfoContainer">
      <div id="xpCapacity"></div>
      <div id="xpQuantity"></div>
      <div id="characterInfo">{componentsTitles.character}</div>
    </div>
  );
}
