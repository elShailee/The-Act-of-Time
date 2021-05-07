import './FocusedMap.css';
import Tile from './Tile.jsx';

const GRID_ROWS = 15;
const GRID_COLS = 28;

const tileExampleData = { data: 'data' }; // this is a place holder , need to be removed.

const tilesArray = [];
for (let row = 0; row < GRID_ROWS; row++) {
	const currentRow = [];
	let colAmount = 2 * Math.abs((GRID_ROWS - 1) / 2 - row);
	for (let col = 0; col < GRID_COLS - colAmount; col++) {
		currentRow.push(tileExampleData);
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
