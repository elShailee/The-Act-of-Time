import React from 'react';
import './CharacterWindowLeft.css';
import CharacterInfo from './CharacterInfo';
import CharacterItems from './CharacterItems';

export default function CharacterWindoLeft() {
	return (
		<div className='leftSideContainer'>
			<CharacterInfo className='CWBL-item1' />
			<CharacterItems className='CWBL-item2' />
		</div>
	);
}
