import { Droppable } from 'react-beautiful-dnd';
import { DiscoveryItemDroppable } from 'Screens/Gameplay/Components/Discovery/DiscoveryWindow/styles_window';
import DiscoveryItem from 'Screens/Gameplay/Components/Discovery/DiscoveryWindow/DiscoveryItem';
import { RowContainer, TableContainer } from './styles';

export const renderDroppablesGrid = ({ gridConfig, droppablesState }) => {
	let result = [];
	for (let row = 0; row < gridConfig.rows; row++) {
		let resultRow = [];
		for (let col = 0; col < gridConfig.cols; col++) {
			const resultCell = itemDroppableGenerator(row, col, gridConfig, droppablesState);
			resultRow.push(resultCell);
		}
		resultRow = <RowContainer key={gridConfig.name + '_row' + row}>{resultRow}</RowContainer>;
		result.push(resultRow);
	}
	result = <TableContainer key={gridConfig.name}>{result}</TableContainer>;
	return result;
};

const itemDroppableGenerator = (row, col, gridConfig, droppablesState) => {
	const id = `${gridConfig.name}_r${row}c${col}`;
	const itemInState = droppablesState[id] ? droppablesState[id] : null;

	return (
		<Droppable type={gridConfig.droppablesType} droppableId={id} key={id} isDropDisabled={gridConfig.isDropDisabled}>
			{provided => (
				<DiscoveryItemDroppable {...provided.droppableProps} ref={provided.innerRef}>
					{provided.placeholder}
					<DiscoveryItem
						itemIndex={itemInState ? itemInState.itemIndex : null}
						id={id}
						isDragDisabled={gridConfig.isDragDisabled}
					/>
				</DiscoveryItemDroppable>
			)}
		</Droppable>
	);
};
