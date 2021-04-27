import React, { useState } from 'react';
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
	const [hover, setHover] = useState(false);
	const characterInfoPersonalData = data => characterInfo.personalData[data];
	const characterInfoGlobalData = data => characterInfo.globalData[data];
	const categoriesFromText = data => characterInfoWindow[data];
	const onHover = props => {
		setHover(itemsDetailes.item[props]);
	};
	const showItem = num => {
		return characterInfoPersonalData('importantItems') > num ? (
			<img
				alt='Item'
				src={characterInfo.globalData.itemList[num]}
				onMouseOver={() => onHover(num)}
				onMouseLeave={() => setHover('')}
			/>
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
	const FuturePlan = daysOrWeeks(characterInfoPersonalData('futurePlanning'));

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
							{categoriesFromText('JoinedAt')} {characterInfoPersonalData('joinedDate')}
							<br />
							{categoriesFromText('TimePlayed')} {hours(characterInfoPersonalData('timePlayed'))}{' '}
							{categoriesFromText('Hours')} <br />
							{categoriesFromText('ItemDiscovered')} {characterInfoPersonalData('itemDiscovered')}/
							{characterInfoGlobalData('numberOfItems')}
							<br />
							{categoriesFromText('Achievments')} {characterInfoPersonalData('achiementEarned')}/
							{characterInfoGlobalData('numberOfAchiement')}
							<br />
							{categoriesFromText('DisatsteresServived')} {characterInfoPersonalData('disatsteresServived')}/
							{characterInfoPersonalData('disatsteresOcarancy')}
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
							{categoriesFromText('Health')} {characterInfoPersonalData('characterHealth')} <br />{' '}
							{categoriesFromText('SleepDuration')}
							{characterInfoPersonalData('avgSleepADay')} {categoriesFromText('HouresADay')} <br />{' '}
							{categoriesFromText('SleepQuality')}
							{characterInfoPersonalData('sleepQuality')} <br /> {categoriesFromText('FoodQuality')}
							{characterInfoPersonalData('foodQuality')}
							<br /> {categoriesFromText('HeatTolerence')} {characterInfoPersonalData('heatTolerence')}
							<br /> {categoriesFromText('ColdTolerence')} {characterInfoPersonalData('coldTolerence')}
							<br /> {categoriesFromText('Memory')} {characterInfoPersonalData('memory')} {categoriesFromText('Tasks')}{' '}
							<br />
							{categoriesFromText('FuturePlanning')} {FuturePlan}
						</p>
					</div>
					<div id='hover-box'>
						<img alt='Item hover background' id='hover-img' src={characterItemHover} />
						<div id='hover-text'>{hover}</div>
					</div>
				</div>
			</div>
		</GeneralWindow>
	);
}
