import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow';
import './CharacterWindow.css';
import { itemsDetailes } from 'Texts/gameplayTexts';
import CharacterWindowTitle from './CharacterWindowTitle';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { characterInfoWindow } from 'Texts/gameplayTexts';

let secondesInHoures = 3600;
const Timep = Math.round(characterInfo.fromDB.timePlayed / secondesInHoures);
function onHover(props) {
	return itemsDetailes.item[props];
}
function showItem(num) {
	return characterInfo.fromDB.importantItems > num ? (
		<img alt='Item' src={characterInfo.fromBuild.itemList[num]} onMouseOver={() => onHover(num)} />
	) : (
		''
	);
}

// function gridItem(numberOfCol, numberOfRow) {
// 	let count = 0,
// 		i = 0,
// 		j = 0;
// 	for (i; i < numberOfRow; i++) {
// 		for (j; j < numberOfCol; j++) {
// 			<div class='character-info-grid-item'>{showItem(count)}</div>;
// 			count++;
// 		}
// 	}
// }

const FuturePlan =
	characterInfo.fromDB.futurePlanning < 7
		? characterInfo.fromDB.futurePlanning + ' days'
		: Math.round(characterInfo.fromDB.futurePlanning / 7) + ' weeks';

export default function CharacterWindow({ unmountCharacterWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountCharacterWindow} title={<CharacterWindowTitle />} id='characterWindow'>
			<div id='charcaterContentContainer'>
				<div className='sideContainer'>
					<div id='character-info-grid-content'>
						<p>
							{characterInfoWindow.JoinedAt} {characterInfo.fromDB.joinedDate}
							<br />
							{characterInfoWindow.TimePlayed} {Timep} {characterInfoWindow.Hours} <br />
							{characterInfoWindow.ItemDiscovered} {characterInfo.fromDB.itemDiscovered}/
							{characterInfo.fromBuild.numberOfItems}
							<br />
							{characterInfoWindow.Achievments} {characterInfo.fromDB.achiementEarned}/
							{characterInfo.fromBuild.numberOfAchiement}
							<br />
							{characterInfoWindow.DisatsteresServived} {characterInfo.fromDB.disatsteresServived}/
							{characterInfo.fromDB.disatsteresOcarancy}
							<br />
						</p>
					</div>
					<div>
						<div id='itemTitle'>{characterInfoWindow.ItemsTable}</div>
						<div id='character-info-grid-container'>
							{/* gridItem(5, 3); */}
							<div className='character-info-grid-item'>{showItem(0)}</div>
							<div className='character-info-grid-item'>{showItem(1)}</div>
							<div className='character-info-grid-item'>{showItem(2)}</div>
							<div className='character-info-grid-item'>{showItem(3)}</div>
							<div className='character-info-grid-item'>{showItem(4)}</div>
							<div className='character-info-grid-item'>{showItem(5)}</div>
							<div className='character-info-grid-item'>{showItem(6)}</div>
							<div className='character-info-grid-item'>{showItem(7)}</div>
							<div className='character-info-grid-item'>{showItem(8)}</div>
							<div className='character-info-grid-item'>{showItem(9)}</div>
							<div className='character-info-grid-item'>{showItem(10)}</div>
							<div className='character-info-grid-item'>{showItem(11)}</div>
							<div className='character-info-grid-item'>{showItem(12)}</div>
							<div className='character-info-grid-item'>{showItem(13)}</div>
							<div className='character-info-grid-item'>{showItem(14)}</div>
						</div>
					</div>
				</div>
				<div className='sideContainer'>
					<div id='CS-grid-container'>
						<p>
							{characterInfoWindow.Helth} {characterInfo.fromDB.characterHelth} <br /> {characterInfoWindow.SleepDuration}
							{characterInfo.fromDB.avgSleepADay} {characterInfoWindow.HouresADay} <br /> {characterInfoWindow.SleepQuality}
							{characterInfo.fromDB.sleepQuality} <br /> {characterInfoWindow.FoodQuality}
							{characterInfo.fromDB.foodQuality}
							<br /> {characterInfoWindow.HeatTolerence} {characterInfo.fromDB.heatTolerence}
							<br /> {characterInfoWindow.ColdTolerence} {characterInfo.fromDB.coldTolerence}
							<br /> {characterInfoWindow.Memory} {characterInfo.fromDB.memory} {characterInfoWindow.Tasks} <br />
							{characterInfoWindow.FuturePlanning} {FuturePlan}
						</p>
					</div>
					<div id='hover-box'>{}</div>
				</div>
			</div>
		</GeneralWindow>
	);
}
