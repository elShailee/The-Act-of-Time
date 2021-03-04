import React from 'react';
import 'Components/Character/CharacterWindoButtom.css';
import CharacterWindowLeft from './CharacterWindowLeft';
import CharacterWindowRight from './CharacterWindowRight';

export default function CharacterWindoButtom() {
	return (
		<div className='CWB-grid'>
			<div className='leftSide'>
				<CharacterWindowLeft className='CWBL-item1' />
			</div>
			<div className='rightSide'>
				<CharacterWindowRight className='CWBR-item1' />
			</div>
		</div>
	);
}
