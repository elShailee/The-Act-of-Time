import React from 'react';
import 'Components/Character/CharacterInfo.css';
import characterInfo from 'ExampleData/characterInfoExampleData';

let secondesInHoures = 3600;
const Timep = Math.round(characterInfo.fromDB.timePlayed / secondesInHoures);

export default function CharacterInfo() {
	return (
		<div className='CI-grid-content'>
			<p>
				Joined at: {characterInfo.fromDB.joinedDate}
				<br />
				Time played: {Timep} hours <br />
				Item discovered: {characterInfo.fromDB.itemDiscovered}/{characterInfo.fromBuild.numberOfItems}
				<br />
				Achiement earned: {characterInfo.fromDB.achiementEarned}/{characterInfo.fromBuild.numberOfAchiement}
				<br />
				Disatsteres servived: {characterInfo.fromDB.disatsteresServived}/{characterInfo.fromDB.disatsteresOcarancy}
				<br />
			</p>
		</div>
	);
}
