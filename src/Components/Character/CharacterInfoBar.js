import React from 'react';
import './CharacterInfoBar.css';
import characterInfo from 'ExampleData/characterInfoExampleData';
//import characterImage from characterInfo.characterImage;

export default function characterInfoBar() {
	const onCharcterImageClick = () => {
		//this is a on click triger for the Character Info window please change when creating the window
		console.log('this trigger exist on characterInfoBar.js')
	  };
  return (
    <div id="characterInfoBarContainer">
			<div className="xpBar" id="xpCapacity"></div>
			<div className="xpBar" id="xpQuantity"></div>

			<div id="characterInfoBar">
			
			<div className="characterTextDetailes">
			<div className="characterName">{characterInfo.characterName} </div>
			<div className="characterLevel">Lvl {characterInfo.characterLevel} </div>
			</div>
			<img alt="characterImage" className="characterImage" src={characterInfo.characterImage} onClick={onCharcterImageClick} />
		</div>

    </div>
  );
}
