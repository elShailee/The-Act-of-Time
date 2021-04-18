import React from 'react';
import './CharacterWindowRight.css';
import CharacterStats from './CharacterStats';
import CharacterHoverBox from './CharacterHoverBox';

export default function CharacterWindowRight() {
	return (
		<div className='rightSideContainer'>
			<CharacterStats className='CWBR-item1' />
			<CharacterHoverBox className='CWBR-item2' />
		</div>
	);
}
