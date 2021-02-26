import React from 'react';
import 'Components/Character/CharacterNameForCW.css';
import characterInfo from 'ExampleData/characterInfoExampleData';

export default function CharacterNameForCW() {
	return (
		<div class='CN-grid-container'>
			<img alt='character Face' className='imageItem' src={characterInfo.fromDB.characterImage} />
			<div className='nameItem'>{characterInfo.fromDB.characterName} </div>
			<div className='lvlItem'>Lvl {characterInfo.fromDB.characterLevel} </div>
			<div className='XPBaritem'>
				<div className='WxpBar' id='WxpCapacity' />
				<div className='WxpBar' id='WxpQuantity' />
				<div>
					{characterInfo.fromDB.xpAchived}/
					{characterInfo.fromBuild.xpRequiredToNextLevel[characterInfo.fromDB.characterLevel]}
				</div>
			</div>
		</div>
	);
}
