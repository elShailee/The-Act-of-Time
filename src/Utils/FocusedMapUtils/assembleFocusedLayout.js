export default function assembleFocusedLayout(exampleData) {
	let result = new Array(exampleData.length + 2);

	let topRow = new Array(exampleData[0].length);
	let bottomRow = new Array(exampleData[0].length);
	for (let i = 0; i < exampleData[0].length; i++) {
		topRow[i] = { type: 'border', value: 'topBorderTile' };
		bottomRow[i] = { type: 'border', value: 'bottomBorderTile' };
	}
	result[0] = topRow;
	result[result.length - 1] = bottomRow;

	for (let row = 0; row < exampleData.length; row++) {
		let currentRow = new Array(exampleData[row].length + 2);

		if (row === Math.floor(exampleData.length / 2)) {
			currentRow[0] = {
				type: 'border',
				value: 'blocker-left',
			};
			currentRow[currentRow.length - 1] = {
				type: 'border',
				value: 'blocker-right',
			};
		} else if (row < exampleData.length / 2) {
			currentRow[0] = {
				type: 'border',
				value: 'upperLeft',
			};
			currentRow[currentRow.length - 1] = {
				type: 'border',
				value: 'upperRight',
			};
		} else {
			currentRow[0] = {
				type: 'border',
				value: 'lowerLeft',
			};
			currentRow[currentRow.length - 1] = {
				type: 'border',
				value: 'lowerRight',
			};
		}

		for (let cell = 0; cell < exampleData[row].length; cell++) {
			currentRow[cell + 1] = {
				type: 'image',
				value: exampleData[row][cell],
			};
		}

		result[row + 1] = currentRow;
	}

	return result;
}
