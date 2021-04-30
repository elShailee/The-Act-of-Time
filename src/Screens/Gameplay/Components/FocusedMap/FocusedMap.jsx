import './FocusedMap.css';
import Tile from './Tile.jsx';

const GRID_ROWS = 16;
const GRID_COLS = 30;

const newNode = Tile;

const grid = [];
for (let row = 0; row < GRID_ROWS; row++) {
	const currentRow = [];
	for (let col = 0; col < GRID_COLS; col++) {
		currentRow.push(newNode);
	}
	grid.push(currentRow);
}

export default function Grid() {
	return (
		<div className='grid'>
			{grid.map((row, rowId) => {
				return (
					<div key={rowId} className='row'>
						{row.map((tile, tileId) => {
							return <Tile key={tileId} />;
						})}
					</div>
				);
			})}
		</div>
	);
}
