import React, { useContext } from 'react';
import './CharacterInfoBar.css';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';

export default function CharacterInfoBar() {
	const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
	const isCharacterWindowMounted = mountedComponentsDict.CharacterWindow;
	const onCharcterImageClick = () => {
		if (isCharacterWindowMounted) unmountComponents('CharacterWindow');
		else mountComponents('CharacterWindow');
	};
	return (
		<div id='characterInfoBarContainer'>
			<div className='xpBar' id='xpCapacity'></div>
			<div className='xpBar' id='xpQuantity'></div>
			<div id='characterInfoBar'>
				<div className='characterTextCointainer'>
					<div className='characterNameText'>{characterInfo.fromDB.characterName} </div>
					<div className='characterLevelText'>Lvl {characterInfo.fromDB.characterLevel} </div>
				</div>
				<img
					alt='character Image'
					className='characterImage'
					src={characterInfo.fromDB.characterImage}
					onClick={onCharcterImageClick}
				/>
			</div>
		</div>
	);
}
