import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow';
import './CharacterWindow.css';
import { itemsDetailes } from 'Texts/gameplayTexts';
import CharacterWindowTitle from './CharacterWindowTitle';
import characterInfo from 'ExampleData/characterInfoExampleData';

let secondesInHoures = 3600;
const Timep = Math.round(characterInfo.fromDB.timePlayed / secondesInHoures);
function onHover(props) {
	return itemsDetailes.item[props];
}
function showItem(num) {
	return characterInfo.fromDB.importantItems > num ? (
		<img alt='Character_face' src={characterInfo.fromBuild.itemList[num]} onMouseOver={() => onHover(num)} />
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
				<div id='leftSideContainer'>
					<div id='character-info-grid-content'>
						<p>
							Joined at: {characterInfo.fromDB.joinedDate}
							<br />
							Time played: {Timep} hours <br />
							Item discovered: {characterInfo.fromDB.itemDiscovered}/{characterInfo.fromBuild.numberOfItems}
							<br />
							Achievments: {characterInfo.fromDB.achiementEarned}/{characterInfo.fromBuild.numberOfAchiement}
							<br />
							Disatsteres servived: {characterInfo.fromDB.disatsteresServived}/{characterInfo.fromDB.disatsteresOcarancy}
							<br />
						</p>
					</div>
					<div>
						<div id='itemTitle'>passive buffs</div>
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
				<div id='rightSideContainer'>
					<div id='CS-grid-container'>
						<p>
							Helth: 47% <br /> Sleep duration avg: 8 h/d <br /> Sleep quality: 75% <br /> Food quality:
							{characterInfo.fromDB.foodQuality}
							<br /> Heat tolerence: {characterInfo.fromDB.heatTolerence}
							<br /> Cold tolerence: {characterInfo.fromDB.coldTolerence}
							<br /> Memory: {characterInfo.fromDB.memory} tasks <br /> Future planning: {FuturePlan}
						</p>
					</div>
					<div id='hover-box'>{}</div>
				</div>
			</div>
		</GeneralWindow>
	);
}
