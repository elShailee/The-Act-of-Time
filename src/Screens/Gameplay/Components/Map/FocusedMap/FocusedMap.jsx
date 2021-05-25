import './FocusedMap.css';
import Tile from './Tile.jsx';

const GRID_ROWS = 15;
const GRID_COLS = 26;

const tileExampleData = { data: 'data' }; // this is a place holder , need to be removed.

const tilesArray = [];
for (let row = 0; row < GRID_ROWS; row++) {
	const currentRow = [];
	for (let col = 0; col < GRID_COLS; col++) {
		currentRow.push(tileExampleData); // Here the tile's data object given by the DB will be inserted.
	}
	tilesArray.push(currentRow);
}

export default function FocusedMap() {
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
