import exampleData from 'ExampleData/focusedMapExampleData';
import assembleFocusedLayout from 'Utils/FocusedMapUtils/assembleFocusedLayout';
import { Container, FmRow, Tile } from './styles';

const tilesArray = assembleFocusedLayout(exampleData);

export default function FocusedMap() {
	return (
		<Container numOfCols={tilesArray[Math.floor(tilesArray.length / 2)].length}>
			{tilesArray.map((row, rowId) => {
				return (
					<FmRow key={rowId}>
						{row.map((tileData, tileId) => {
							return <Tile key={tileId} tileData={tileData} />;
						})}
					</FmRow>
				);
			})}
		</Container>
	);
}
