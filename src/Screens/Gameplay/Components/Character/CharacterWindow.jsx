import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow';
import './CharacterWindow.css';
import { itemsDetailes } from 'Texts/gameplayTexts';
import CharacterWindowTitle from './CharacterWindowTitle';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { characterInfoWindow } from 'Texts/gameplayTexts';
import characterItemHover from 'Assets/characterItemHover.png';

export default function CharacterWindow({ unmountCharacterWindow }) {
	const fromDB = data => characterInfo.fromDB[data];
	const fromBuild = data => characterInfo.fromBuild[data];
	const fromText = data => characterInfoWindow[data];
	let secondesInHoures = 3600;
	const Timep = Math.round(fromDB('timePlayed') / secondesInHoures);
	function onHover(props) {
		return itemsDetailes.item[props];
	}
	const showItem = num => {
		return fromDB('importantItems') > num ? (
			<img alt='Item' src={characterInfo.fromBuild.itemList[num]} onMouseOver={() => onHover(num)} />
		) : (
			''
		);
	};
	const gridItem = (numberOfCol, numberOfRow) => {
		let count = 0;
		for (var i = 0; i < numberOfRow; i++) {
			for (var j = 0; j < numberOfCol; j++) {
				<div className='character-info-grid-item'>{showItem(count)}</div>;
				count++;
			}
		}
	};
	const FuturePlan =
		fromDB('futurePlanning') < 7 ? fromDB('futurePlanning') + ' days' : Math.round(fromDB('futurePlanning') / 7) + ' weeks';

	return (
		<GeneralWindow
			unmountGeneralWindow={unmountCharacterWindow}
			title={<CharacterWindowTitle />}
			id='characterWindow'
			containerId='charcaterContentContainer'
		>
			<div id='charcaterContent'>
				<div className='sideContainer'>
					<div id='character-info-grid-content'>
						<p>
							{fromText('JoinedAt')} {fromDB('joinedDate')}
							<br />
							{fromText('TimePlayed')} {Timep} {fromText('Hours')} <br />
							{fromText('ItemDiscovered')} {fromDB('itemDiscovered')}/{fromBuild('numberOfItems')}
							<br />
							{fromText('Achievments')} {fromDB('achiementEarned')}/{fromBuild('numberOfAchiement')}
							<br />
							{fromText('DisatsteresServived')} {fromDB('disatsteresServived')}/{fromDB('disatsteresOcarancy')}
							<br />
						</p>
					</div>
					<div>
						<div id='itemTitle'>{fromText('ItemsTable')}</div>
						<div id='character-info-grid-container'>{gridItem(5, 3)}</div>
					</div>
				</div>
				<div className='sideContainer'>
					<div id='CS-grid-container'>
						<p>
							{fromText('Health')} {fromDB('characterHealth')} <br /> {fromText('SleepDuration')}
							{fromDB('avgSleepADay')} {fromText('HouresADay')} <br /> {fromText('SleepQuality')}
							{fromDB('sleepQuality')} <br /> {fromText('FoodQuality')}
							{fromDB('foodQuality')}
							<br /> {fromText('HeatTolerence')} {fromDB('heatTolerence')}
							<br /> {fromText('ColdTolerence')} {fromDB('coldTolerence')}
							<br /> {fromText('Memory')} {fromDB('memory')} {fromText('Tasks')} <br />
							{fromText('FuturePlanning')} {FuturePlan}
						</p>
					</div>
					<div>
						{/* <div id='hover-box'> */}
						<img alt='Item hover background' className='imageItemHover' src={characterItemHover} />
					</div>
				</div>
			</div>
		</GeneralWindow>
	);
}
