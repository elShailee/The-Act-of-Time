import React from 'react';
import './CharacterInfoBar.css';
import characterInfo from 'ExampleData/characterInfoExampleData';
//import characterImage from characterInfo.characterImage;

export default function characterInfoBar() {
	const onCharcterInfoClick = () => {
		
	  };
  return (
    <div id="characterInfoBarContainer">
			<div className="xpBar" id="xpCapacity"></div>
			<div className="xpBar" id="xpQuantity"></div>
			
			<div id="characterInfoBar">				
			<div class="characterName">{characterInfo.characterName} </div>
			<div class="characterLevel">Lvl {characterInfo.characterLevel} </div>
			<img alt="characterImage" class="characterImage" src={characterInfo.characterImage} onClick={onCharcterInfoClick}/>
		</div>

    </div>
  );
}
