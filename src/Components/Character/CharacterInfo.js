import React from 'react';
import './CharacterInfo.css';
import { characterInfoTexts } from 'Texts/gameplayTexts';

export default function CharacterInfo() {
  return (
    <div id="characterInfoContainer">
      <div className="xpBar" id="xpCapacity"></div>
      <div className="xpBar" id="xpQuantity"></div>
      <div id="characterInfo">{characterInfoTexts.title}</div>
    </div>
  );
}
