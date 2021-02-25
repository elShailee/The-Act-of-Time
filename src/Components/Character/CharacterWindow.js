import React from 'react';
import characterInfo from 'ExampleData/characterInfoExampleData';
import GeneralWindow from 'Components/GeneralComponents/GeneralWindow';
import './CharacterWindow.css';
import { itemsDetailes } from 'Texts/gameplayTexts';
//import itemT from './CharacterItems.js';

const Timep = Math.round((characterInfo.fromDB.timePlayed / 3600) * 10) / 10;
const FuturePlan =
	characterInfo.fromDB.futurePlanning < 7
		? characterInfo.fromDB.futurePlanning + ' days'
		: Math.round((characterInfo.fromDB.futurePlanning / 7) * 10) / 10 + ' weeks';
function onHover(num) {
	return itemsDetailes.item[num];
}
function showItem(num) {
	return characterInfo.fromDB.importantItems > num ? (
		<img src={characterInfo.fromBuild.itemList[num]} onMouseOver={() => onHover(num)} />
	) : (
		''
	);
}
export default function CharacterWindow({ unmountCharacterWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountCharacterWindow} windowTitle='text'>
			<div className='CharacterWindowContainer'>
				<table>
					<tr>
						<td rowSpan='2'>
							<img alt='character Face' className='CharacterImage' src={characterInfo.fromDB.characterImage} />
						</td>
						<td colSpan='2'>
							<div className='characterName'>{characterInfo.fromDB.characterName} </div>
						</td>
					</tr>
					<tr>
						<td>
							<div className='characterLvl'>Lvl {characterInfo.fromDB.characterLevel} </div>
						</td>
						<td className='XPBar'>
							<div className='WxpBar' id='WxpCapacity' />
							<div className='WxpBar' id='WxpQuantity' />
							<div>
								{characterInfo.fromDB.xpAchived}/
								{characterInfo.fromBuild.xpRequiredToNextLevel[characterInfo.fromDB.characterLevel]}
							</div>
						</td>
					</tr>
				</table>
				<table>
					<tr>
						<td rowSpan='2'>
							<div className='characterStats'>
								<p>
									Helth: 47% <br />
									Avg sleep duration: 8 h/d
									<br />
									Sleep quality: 75% <br />
									Food quality: {characterInfo.fromDB.foodQuality}
									<br />
									Heat tolerence: {characterInfo.fromDB.heatTolerence}
									<br />
									Cold tolerence: {characterInfo.fromDB.coldTolerence}
									<br />
									Memory: {characterInfo.fromDB.memory} tasks
									<br />
									Future planning: {FuturePlan}
								</p>
							</div>
						</td>
						<td>
							<div className='characterInfo'>
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
						</td>
					</tr>
					<tr>
						<td>
							<div className='CharacterItems'>
								<table className='itemTable' border='1'>
									<tr>
										<td className='item' id='0'>
											{showItem(0)}
										</td>
										<td className='item' id='1'>
											{showItem(1)}
										</td>
										<td className='item' id='2'>
											{showItem(2)}
										</td>
										<td className='item' id='3'>
											{showItem(3)}
										</td>
										<td className='item' id='4'>
											{showItem(4)}
										</td>
										<td className='item' id='5'>
											{showItem(5)}
										</td>
									</tr>
									<tr>
										<td className='item' id='6'>
											{showItem(6)}
										</td>
										<td className='item' id='7'>
											{showItem(7)}
										</td>
										<td className='item' id='8'>
											{showItem(8)}
										</td>
										<td className='item' id='9'>
											{showItem(9)}
										</td>
										<td className='item' id='10'>
											{showItem(10)}
										</td>
										<td className='item' id='11'>
											{showItem(11)}
										</td>
									</tr>
									<tr>
										<td className='item' id='12'>
											{showItem(12)}
										</td>
										<td className='item' id='13'>
											{showItem(13)}
										</td>
										<td className='item' id='14'>
											{showItem(14)}
										</td>
										<td className='item' id='15'>
											{showItem(15)}
										</td>
										<td className='item' id='16'>
											{showItem(16)}
										</td>
										<td className='item' id='17'>
											{showItem(17)}
										</td>
									</tr>
									<tr>
										<td className='item' id='18'>
											{showItem(18)}
										</td>
										<td className='item' id='19'>
											{showItem(19)}
										</td>
										<td className='item' id='20'>
											{showItem(20)}
										</td>
										<td className='item' id='21'>
											{showItem(21)}
										</td>
										<td className='item' id='22'>
											{showItem(22)}
										</td>
										<td className='item' id='23'>
											{showItem(23)}
										</td>
									</tr>
								</table>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</GeneralWindow>
	);
}
