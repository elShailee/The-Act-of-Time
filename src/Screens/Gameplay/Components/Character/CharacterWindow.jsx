import React, { useRef } from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow';
import './CharacterWindow.css';
import { itemsDetailes } from 'Texts/gameplayTexts';
import CharacterWindowTitle from './CharacterWindowTitle';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { characterInfoWindow } from 'Texts/gameplayTexts';
import characterItemHover from 'Assets/characterItemHover.png';
import hours from 'Utils/TimingUtils/hours';
import daysOrWeeks from 'Utils/TimingUtils/daysOrWeeks';

export default function CharacterWindow({ unmountCharacterWindow }) {
	const hoverRef = useRef(null);
	const characterInfoFromDB = data => characterInfo.fromDB[data];
	const characterInfoFromSettings = data => characterInfo.fromBuild[data];
	const categoriesFromText = data => characterInfoWindow[data];
	const onHover = props => {
		console.log('when hover should show detailes in the hover box this triger is in CharcterWindow.jsx');
		hoverRef.current.innerHTML = itemsDetailes.item[props];
	};
	const showItem = num => {
		return characterInfoFromDB('importantItems') > num ? (
			<img alt='Item' src={characterInfo.fromBuild.itemList[num]} onMouseOver={() => onHover(num)} />
		) : (
			''
		);
	};
	const gridItem = (numberOfCol, numberOfRow) => {
		let count = 0;
		let arr = [];
		for (let i = 0; i < numberOfRow; i++) {
			for (let j = 0; j < numberOfCol; j++) {
				arr[count] = (
					<div key={count} className='character-info-grid-item'>
						{showItem(count)}
					</div>
				);
				count++;
			}
		}
		return arr;
	};
	const FuturePlan = daysOrWeeks(characterInfoFromDB('futurePlanning'));

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
							{categoriesFromText('JoinedAt')} {characterInfoFromDB('joinedDate')}
							<br />
							{categoriesFromText('TimePlayed')} {hours(characterInfoFromDB('timePlayed'))} {categoriesFromText('Hours')}{' '}
							<br />
							{categoriesFromText('ItemDiscovered')} {characterInfoFromDB('itemDiscovered')}/
							{characterInfoFromSettings('numberOfItems')}
							<br />
							{categoriesFromText('Achievments')} {characterInfoFromDB('achiementEarned')}/
							{characterInfoFromSettings('numberOfAchiement')}
							<br />
							{categoriesFromText('DisatsteresServived')} {characterInfoFromDB('disatsteresServived')}/
							{characterInfoFromDB('disatsteresOcarancy')}
							<br />
						</p>
					</div>
					<div>
						<div id='itemTitle'>{categoriesFromText('ItemsTable')}</div>
						<div id='character-info-grid-container'>{gridItem(5, 3).map(ele => ele)}</div>
					</div>
				</div>
				<div className='sideContainer'>
					<div id='CS-grid-container'>
						<p>
							{categoriesFromText('Health')} {characterInfoFromDB('characterHealth')} <br />{' '}
							{categoriesFromText('SleepDuration')}
							{characterInfoFromDB('avgSleepADay')} {categoriesFromText('HouresADay')} <br />{' '}
							{categoriesFromText('SleepQuality')}
							{characterInfoFromDB('sleepQuality')} <br /> {categoriesFromText('FoodQuality')}
							{characterInfoFromDB('foodQuality')}
							<br /> {categoriesFromText('HeatTolerence')} {characterInfoFromDB('heatTolerence')}
							<br /> {categoriesFromText('ColdTolerence')} {characterInfoFromDB('coldTolerence')}
							<br /> {categoriesFromText('Memory')} {characterInfoFromDB('memory')} {categoriesFromText('Tasks')} <br />
							{categoriesFromText('FuturePlanning')} {FuturePlan}
						</p>
					</div>
					<div id='hover-box'>
						<img alt='Item hover background' id='hover-img' src={characterItemHover} />
						<div id='hover-text' ref={hoverRef}></div>
					</div>
				</div>
			</div>
		</GeneralWindow>
	);
}
