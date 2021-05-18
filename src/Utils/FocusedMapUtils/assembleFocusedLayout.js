import tileExampleData from 'ExampleData/focusedMapExampleData';
import focusedMapAssetLib from 'Screens/Gameplay/Components/Map/FocusedMap/focusedMapAssetLib';

export default function assembleFocusedLayout(exampleData) {
	let res = new Array(exampleData.length + 2);

	let first = new Array(exampleData[0].length);
	let last = new Array(exampleData[0].length);
	for (let i = 0; i < exampleData[0].length; i++) {
		first[i] = { type: 'border', value: 'topBorderTile' };
		last[i] = { type: 'border', value: 'bottomBorderTile' };
	}
	res[0] = first;
	res[res.length - 1] = last;

	for (let row = 0; row < exampleData.length; row++) {
		let currentRow = new Array(exampleData[row].length + 2);

		if (row === Math.floor(exampleData.length / 2)) {
			currentRow[0] = {
				type: 'border',
				value: 'blocker-left',
				asset: 'deepsea',
			};
			currentRow[currentRow.length - 1] = {
				type: 'border',
				value: 'blocker-right',
				asset: 'path2',
			};
		} else if (row < exampleData.length / 2) {
			currentRow[0] = {
				type: 'border',
				value: 'upperLeft',
				asset: 'deepsea',
			};
			currentRow[currentRow.length - 1] = {
				type: 'border',
				value: 'upperRight',
				asset: 'grass2',
			};
		} else {
			currentRow[0] = {
				type: 'border',
				value: 'lowerLeft',
				asset: 'deepsea',
			};
			currentRow[currentRow.length - 1] = {
				type: 'border',
				value: 'lowerRight',
				asset: 'grass2',
			};
		}

		for (let cell = 0; cell < exampleData[row].length; cell++) currentRow[cell + 1] = exampleData[row][cell];

		res[row + 1] = currentRow;
	}
	return res;
}
