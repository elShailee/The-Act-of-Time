import React from 'react';
import 'Components/Character/CharacterStats.css';
import characterInfo from 'ExampleData/characterInfoExampleData';

const FuturePlan =
	characterInfo.fromDB.futurePlanning < 7
		? characterInfo.fromDB.futurePlanning + ' days'
		: Math.round(characterInfo.fromDB.futurePlanning / 7) + ' weeks';

export default function CharacterStats() {
	return (
		<div className='CS-grid-container'>
			<p>
				Helth: 47% <br /> Avg sleep duration: 8 h/d <br /> Sleep quality: 75% <br /> Food quality:{' '}
				{characterInfo.fromDB.foodQuality}
				<br /> Heat tolerence: {characterInfo.fromDB.heatTolerence}
				<br /> Cold tolerence: {characterInfo.fromDB.coldTolerence}
				<br /> Memory: {characterInfo.fromDB.memory} tasks <br /> Future planning: {FuturePlan}
			</p>
		</div>
	);
}
