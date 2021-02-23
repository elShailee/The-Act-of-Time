import React from 'react';
import characterInfo from 'ExampleData/characterInfoExampleData';
import GeneralWindow from 'Components/GeneralComponents/GeneralWindow';
import './CharacterWindow.css';
import { itemsDetailes } from 'Texts/gameplayTexts';

const Timep = Math.round(characterInfo.fromDB.timePlayed / 3600);
function onHover(props) {
	return itemsDetailes.item[this.props.id];
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
						<td rowSpan='2'>
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
							<div className='CharacterItems'>
								<table className='itemTable' border='1'>
									<tr>
										<td className='item' id='1'>
											{characterInfo.fromDB.importantItems >= 1 ? (
												<img src={characterInfo.fromBuild.itemList[0]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='2'>
											{characterInfo.fromDB.importantItems >= 2 ? (
												<img src={characterInfo.fromBuild.itemList[1]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='3'>
											{characterInfo.fromDB.importantItems >= 3 ? (
												<img src={characterInfo.fromBuild.itemList[2]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='4'>
											{characterInfo.fromDB.importantItems >= 4 ? (
												<img src={characterInfo.fromBuild.itemList[3]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='5'>
											{characterInfo.fromDB.importantItems >= 5 ? (
												<img src={characterInfo.fromBuild.itemList[4]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='6'>
											{characterInfo.fromDB.importantItems >= 6 ? (
												<img src={characterInfo.fromBuild.itemList[5]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
									</tr>
									<tr>
										<td className='item' id='7'>
											{characterInfo.fromDB.importantItems >= 7 ? (
												<img src={characterInfo.fromBuild.itemList[6]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='8'>
											{characterInfo.fromDB.importantItems >= 8 ? (
												<img src={characterInfo.fromBuild.itemList[7]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='9'>
											{characterInfo.fromDB.importantItems >= 9 ? (
												<img src={characterInfo.fromBuild.itemList[8]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='10'>
											{characterInfo.fromDB.importantItems >= 10 ? (
												<img src={characterInfo.fromBuild.itemList[9]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='11'>
											{characterInfo.fromDB.importantItems >= 11 ? (
												<img src={characterInfo.fromBuild.itemList[10]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='12'>
											{characterInfo.fromDB.importantItems >= 12 ? (
												<img src={characterInfo.fromBuild.itemList[11]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
									</tr>
									<tr>
										<td className='item' id='13'>
											{characterInfo.fromDB.importantItems >= 13 ? (
												<img src={characterInfo.fromBuild.itemList[12]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='14'>
											{characterInfo.fromDB.importantItems >= 14 ? (
												<img src={characterInfo.fromBuild.itemList[13]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='15'>
											{characterInfo.fromDB.importantItems >= 15 ? (
												<img src={characterInfo.fromBuild.itemList[14]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='16'>
											{characterInfo.fromDB.importantItems >= 16 ? (
												<img src={characterInfo.fromBuild.itemList[15]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='17'>
											{characterInfo.fromDB.importantItems >= 17 ? (
												<img src={characterInfo.fromBuild.itemList[16]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='18'>
											{characterInfo.fromDB.importantItems >= 18 ? (
												<img src={characterInfo.fromBuild.itemList[17]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
									</tr>
									<tr>
										<td className='item' id='19'>
											{characterInfo.fromDB.importantItems >= 19 ? (
												<img src={characterInfo.fromBuild.itemList[18]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='20'>
											{characterInfo.fromDB.importantItems >= 20 ? (
												<img src={characterInfo.fromBuild.itemList[19]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='21'>
											{characterInfo.fromDB.importantItems >= 21 ? (
												<img src={characterInfo.fromBuild.itemList[20]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='22'>
											{characterInfo.fromDB.importantItems >= 22 ? (
												<img src={characterInfo.fromBuild.itemList[21]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='23'>
											{characterInfo.fromDB.importantItems >= 23 ? (
												<img src={characterInfo.fromBuild.itemList[22]} onMouseOver={onHover} />
											) : (
												''
											)}
										</td>
										<td className='item' id='24'>
											{characterInfo.fromDB.importantItems >= 24 ? (
												<img src={characterInfo.fromBuild.itemList[23]} onMouseOver={onHover} />
											) : (
												''
											)}
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
