import React from 'react';
import characterInfo from 'ExampleData/characterInfoExampleData';
import GeneralWindow from 'Components/GeneralComponents/GeneralWindow';
import './CharacterWindow.css';
import CharacterWindoButtom from './CharacterWindoButtom';
import CharacterNameForCW from './CharacterNameForCW';

export default function CharacterWindow({ unmountCharacterWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountCharacterWindow} title={characterInfo.fromDB.characterName}>
			<div className='CharacterWindowContainer'>
				<CharacterNameForCW className='nameAndLvl' />
				<CharacterWindoButtom className='CWB-grid' />
			</div>
		</GeneralWindow>
	);
}
