import React from 'react';
import characterInfo from 'ExampleData/characterInfoExampleData';
import GeneralWindow, { windowTitle } from 'Components/GeneralComponents/GeneralWindow';
import './CharacterWindow.css';
import { characterInfoWindow } from 'Texts/gameplayTexts';

const Timep = Math.round(characterInfo.fromDB.timePlayed / 3600);

export default function CharacterWindow({ unmountCharacterWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountCharacterWindow} windowTitle={characterInfoWindow}>
			<div className='CharacterWindowContainer'>
				<table>
					<tr>
						<td rowspan='2'>
							<img alt='character Face' className='CharacterImage' src={characterInfo.fromDB.characterImage} />
						</td>
						<td colspan='2'>
							<div className='characterName'>{characterInfo.fromDB.characterName} </div>
						</td>
					</tr>
					<tr>
						<td>
							<div className='characterLvl'>Lvl {characterInfo.fromDB.characterLevel} </div>
						</td>
						<td className='XPBar'>
							<div className='WxpBar' id='WxpCapacity'></div>
							<div className='WxpBar' id='WxpQuantity'>
								{characterInfo.fromDB.xpAchived}/
								{characterInfo.fromBuild.xpRequiredToNextLevel[characterInfo.fromDB.characterLevel]}
							</div>
						</td>
					</tr>
				</table>
				<table>
					<tr>
						<td rowspan='2'>
							<div className='characterStats'>
								<p>
									Helth: 47% <br />
									Avg' sleep duration: 8 h/d
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
									Futer planning: {characterInfo.fromDB.futurePlanning} weeks
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
							<div className='CharacterItems'></div>
						</td>
					</tr>
				</table>
			</div>
		</GeneralWindow>
	);
}
