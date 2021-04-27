import React from 'react';
import './CharacterInfoBar.css';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';

export default function CharacterInfoBar() {
	const dispatch = useDispatch();
	const isCharacterWindowMounted = useSelector(state => state.MountedComponents.CharacterWindow);
	const onCharcterImageClick = () => {
		if (isCharacterWindowMounted) dispatch(unmountComponents('CharacterWindow'));
		else dispatch(mountComponents('CharacterWindow'));
	};

	return (
		<div id='characterInfoBarContainer'>
			<div className='xpBar' id='xpCapacity'></div>
			<div className='xpBar' id='xpQuantity'></div>
			<div id='characterInfoBar'>
				<div className='characterTextCointainer'>
					<div className='characterNameText'>{characterInfo.personalData.characterName} </div>
					<div className='characterLevelText'>Lvl {characterInfo.personalData.characterLevel} </div>
				</div>
				<img
					alt='character_face'
					className='characterImage'
					src={characterInfo.personalData.characterImage}
					onClick={onCharcterImageClick}
				/>
			</div>
		</div>
	);
}
