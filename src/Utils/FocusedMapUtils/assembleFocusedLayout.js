import tileExampleData from './tileExampleData';
import { insertFocusedMapPadding } from './insertFocusedMapPadding';

const GRID_ROWS = 15;
const GRID_COLS = 26;

const paddedFocusedMap = insertFocusedMapPadding(tileExampleData);

export default function assembleFocusedLayout() {
	const tilesArray = [];

	for (let row = 0; row < GRID_ROWS; row++) {
		const currentRow = [];
		let colAmount = 2 * Math.abs((GRID_ROWS - 1) / 2 - row);
		for (let col = 0; col < GRID_COLS - colAmount; col++) {
			currentRow.push(paddedFocusedMap[row][col]);
		}

		tilesArray.push(currentRow);
	}
	return tilesArray;
}
