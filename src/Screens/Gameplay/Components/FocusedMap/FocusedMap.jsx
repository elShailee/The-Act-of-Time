import './FocusedMap.css';
import Tile from './Tile.jsx';

const GRID_ROW_LENGTH = 14;
const GRID_COL_LENGTH = 30;

const newNode = Tile;

const grid = [];
for (let row = 0; row < GRID_ROW_LENGTH; row++) {
	const currentRow = [];
	for (let col = 0; col < GRID_COL_LENGTH; col++) {
		currentRow.push(newNode);
	}
	grid.push(currentRow);
}

export default function Grid() {
	return (
		<div className='grid'>
			{grid.map((row, rowId) => {
				return (
					<div key={rowId}>
						{row.map((tile, tileId) => {
							return <Tile key={tileId} />;
						})}
					</div>
				);
			})}
		</div>
	);
}
