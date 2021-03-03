import React from 'react';
import 'Components/Character/CharacterItems.css';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { itemsDetailes } from 'Texts/gameplayTexts';
import ReactTooltip from 'react-tooltip';

function onHover(props) {
	return itemsDetailes.item[props];
}
function showItem(num) {
	return (
		<ReactTooltip data-tip={itemsDetailes.item[num]}>
			{characterInfo.fromDB.importantItems > num} ? (
			<img src={characterInfo.fromBuild.itemList[num]} alt='item detailes' onMouseOver={() => onHover(num)} />) : ( '' ); //
		</ReactTooltip>
	);
}
// function gridItem(numberOfCol, numberOfRow) {
// 	let count = 0,
// 		i = 0,
// 		j = 0;
// 	for (i; i < numberOfRow; i++) {
// 		for (j; j < numberOfCol; j++) {
// 			<div class='grid-item'>{showItem(count)}</div>;
// 			count++;
// 		}
// 	}
// }

export default function CharacterItems() {
	return (
		<div className='items'>
			<div className='itemTitle'>passive buffs</div>
			<div class='CI-grid-container'>
				{/* gridItem(5, 3); */}
				<div class='CI-grid-item'>{showItem(0)}</div>
				<div class='CI-grid-item'>{showItem(1)}</div>
				<div class='CI-grid-item'>{showItem(2)}</div>
				<div class='CI-grid-item'>{showItem(3)}</div>
				<div class='CI-grid-item'>{showItem(4)}</div>
				<div class='CI-grid-item'>{showItem(5)}</div>
				<div class='CI-grid-item'>{showItem(6)}</div>
				<div class='CI-grid-item'>{showItem(7)}</div>
				<div class='CI-grid-item'>{showItem(8)}</div>
				<div class='CI-grid-item'>{showItem(9)}</div>
				<div class='CI-grid-item'>{showItem(10)}</div>
				<div class='CI-grid-item'>{showItem(11)}</div>
				<div class='CI-grid-item'>{showItem(12)}</div>
				<div class='CI-grid-item'>{showItem(13)}</div>
				<div class='CI-grid-item'>{showItem(14)}</div>
			</div>
		</div>
	);
}
