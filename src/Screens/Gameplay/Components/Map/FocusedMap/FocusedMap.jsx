import './FocusedMap.css';
import Tile from './Tile.jsx';
import assembleFocusedLayout from 'Utils/FocusedMapUtils/assembleFocusedLayout';

const tilesArray = assembleFocusedLayout();

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
