import React from 'react';
import CharacterInfo from './CharacterInfo';
import CharacterItems from './CharacterItems';
import CharacterStats from './CharacterStats';

export default function CharacterWindoButtom() {
	return (
		<div className='CWB-grid'>
			<CharacterInfo className='CWB-item2' />
			<CharacterStats className='CWB-item1' />
			<CharacterItems className='CWB-item3' />
			<div className='hover-box'></div>
		</div>
	);
}
