import React from 'react';
import './CharacterInfoBar.css';
import { characterInfoTexts } from 'Texts/gameplayTexts';
import characterInfo from 'ExampleData/characterInfoExampleData';
//import characterImage from characterInfo.characterImage;

export default function CharacterInfo() {
  return (
    <div id="characterInfoBarContainer">
			<div className="xpBar" id="xpCapacity"></div>
			<div className="xpBar" id="xpQuantity"></div>
			
			<div id="characterInfoBar">				
			<div class="characterName">{characterInfo.characterName} </div>
			<img alt="characterImage" class="characterImage" src={characterInfo.characterImage} />
			<div class="characterLevel"> {characterInfo.characterLevel} </div>
		</div>

    </div>
  );
}
