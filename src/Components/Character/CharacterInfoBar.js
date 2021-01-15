import React from 'react';
import './CharacterInfoBar.css';
import characterInfo from 'ExampleData/characterInfoExampleData';

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
				<div className="characterTextCointainer">
					<div className="characterNameText">{characterInfo.characterName} </div>
					<div className="characterLevelText">Lvl {characterInfo.characterLevel} </div>
				</div>
				<img alt="character Image" className="characterImage" src={characterInfo.characterImage} onClick={onCharcterImageClick} />
			</div>
    </div>
  );
}
