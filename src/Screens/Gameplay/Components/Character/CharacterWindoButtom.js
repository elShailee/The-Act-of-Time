import React from 'react';
import './CharacterWindoButtom.css';
import CharacterWindowLeft from './CharacterWindowLeft';
import CharacterWindowRight from './CharacterWindowRight';

export default function CharacterWindoButtom() {
	return (
		<div className='CWB-grid'>
			<CharacterWindowLeft className='CWBL-item1' />
			<CharacterWindowRight className='CWBR-item1' />
		</div>
	);
}
