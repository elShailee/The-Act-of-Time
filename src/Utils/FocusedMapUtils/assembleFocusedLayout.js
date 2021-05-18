export default function assembleFocusedLayout(exampleData) {
	let res = new Array(exampleData.length + 2);

	let first = new Array(exampleData[0].length);
	let last = new Array(exampleData[0].length);
	for (let i = 0; i < exampleData[0].length; i++) {
		first[i] = 'upperBorderTile';
		last[i] = 'bottomBorderTile';
	}
	res[0] = first;
	res[res.length - 1] = last;

	for (let row = 0; row < exampleData.length; row++) {
		let currentRow = new Array(exampleData[row].length + 2);

		if (row === Math.floor(exampleData.length / 2)) {
			currentRow[0] = 'blocker-left';
			currentRow[currentRow.length - 1] = 'blocker-right';
		} else if (row < exampleData.length / 2) {
			currentRow[0] = 'upperLeft';
			currentRow[currentRow.length - 1] = 'upperRight';
		} else {
			currentRow[0] = 'lowerLeft';
			currentRow[currentRow.length - 1] = 'lowerRight';
		}

		for (let cell = 0; cell < exampleData[row].length; cell++) currentRow[cell + 1] = exampleData[row][cell];

		res[row + 1] = currentRow;
	}
	return res;
}
