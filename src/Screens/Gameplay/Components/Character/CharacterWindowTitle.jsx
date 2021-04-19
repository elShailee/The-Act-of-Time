import React from 'react';
import './CharacterWindowTitle.css';
import characterInfo from 'ExampleData/characterInfoExampleData';

export default function CharacterWindowTitle() {
	const onCharcterImageClick = () => {
		//this is a on click triger to change Character image please change when creating the window
		console.log('this trigger named onCharcterImageClick exist on CharacterWindowTitle.jsx');
	};
	const onCharcterNameClick = () => {
		//this is a on click triger for the Name editor please change when creating the editor
		console.log('this trigger named onCharcterNameClick exist on CharacterWindowTitle.jsx');
	};
	return (
		<div className='CN-grid-container'>
			<img
				alt='character Face'
				className='imageItem'
				src={characterInfo.fromDB.characterImage}
				onClick={onCharcterImageClick}
			/>
			<div className='nameItem' onClick={onCharcterNameClick}>
				{characterInfo.fromDB.characterName}
			</div>
			<div className='lvlItem'>Lvl {characterInfo.fromDB.characterLevel} </div>
			<div className='XPBar'>
				<div className='WxpCapacity' />
				<div className='WxpQuantity' />
				<div className='WxpInNumbers'>
					{characterInfo.fromDB.xpAchived}/
					{characterInfo.fromBuild.xpRequiredToNextLevel[characterInfo.fromDB.characterLevel]}
				</div>
			</div>
		</div>
	);
}
