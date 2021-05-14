export function insertFocusedMapPadding(exampleData) {
	let res = new Array(exampleData.length + 2);

	let first = new Array(exampleData[0].length);
	let last = new Array(exampleData[0].length);
	for (let i = 0; i < exampleData[0].length + 2; i++) {
		first[i] = 'upperBorderTile';
		last[i] = 'bottomBorderTile';
	}
	res[0] = first;
	res[res.length - 1] = last;

	first[0] = 'halfbox-upperLeft';
	first[first.length - 1] = 'halfbox-upperRight';
	last[0] = 'halfbox-lowerLeft';
	last[last.length - 1] = 'halfbox-lowerRight';

	for (let row = 0; row < exampleData.length; row++) {
		let currentRow = new Array(exampleData[row].length + 4);

		if (row === Math.floor(exampleData.length / 2)) {
			currentRow[0] = 'hidden';
			currentRow[1] = 'blocker';
			currentRow[currentRow.length - 2] = 'blocker';
			currentRow[currentRow.length - 1] = 'hidden';
		} else if (row < exampleData.length / 2) {
			currentRow[0] = 'halfbox-upperLeft';
			currentRow[1] = 'lowerRight';
			currentRow[currentRow.length - 1] = 'halfbox-upperRight';
			currentRow[currentRow.length - 2] = 'upperRight';
		} else {
			currentRow[0] = 'halfbox-lowerLeft';
			currentRow[1] = 'lowerLeft';
			currentRow[currentRow.length - 1] = 'halfbox-lowerRight';
			currentRow[currentRow.length - 2] = 'lowerRight';
		}

		for (let cell = 0; cell < exampleData[row].length; cell++) currentRow[cell + 2] = exampleData[row][cell];

		res[row + 1] = currentRow;
	}
	return res;
}
