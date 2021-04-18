import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow';
import './CharacterWindow.css';
import CharacterWindoButtom from './CharacterWindoButtom';
import CharacterNameForCW from './CharacterNameForCW';

export default function CharacterWindow({ unmountCharacterWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountCharacterWindow} title={<CharacterNameForCW className='nameAndLvl' />}>
			<div className='CharacterWindowContainer'>
				<CharacterWindoButtom className='CWB-grid' />
			</div>
		</GeneralWindow>
	);
}
