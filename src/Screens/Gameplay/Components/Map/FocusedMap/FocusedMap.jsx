import './FocusedMap.css';
import Tile from './Tile.jsx';

const GRID_ROWS = 15;
let colAmount = 14;
let rowNumber = 0;

const tileExampleData = { data: 'data' }; // this is a place holder , need to be removed.

const tilesArray = [];
for (let row = 0; row < GRID_ROWS; row++) {
	const currentRow = [];

	if (rowNumber >= 7) {
		// Lower half of the focused map.
		for (let col = 0; col < colAmount; col++) {
			currentRow.push(tileExampleData);
		}
		colAmount -= 2;
		rowNumber++;
	} else if (row === rowNumber) {
		// Upper half of the focused map.
		for (let col = 0; col < colAmount; col++) {
			currentRow.push(tileExampleData);
		}
		colAmount += 2;
		rowNumber++;
	}

	tilesArray.push(currentRow);
}

export default function FocusedMap() {
	console.log(tilesArray);
	return (
		<div id='focusedMap'>
			{tilesArray.map((row, rowId) => {
				return (
					<div key={rowId} className='fm-row'>
						{row.map((tileData, tileId) => {
							return <Tile key={tileId} tileData={tileData} />;
						})}
					</div>
				);
			})}
		</div>
	);
}
