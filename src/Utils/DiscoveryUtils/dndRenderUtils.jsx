import { Droppable } from 'react-beautiful-dnd';
import { DiscoveryItemDroppable } from 'Screens/Gameplay/Components/Discovery/DiscoveryWindow/styles_window';
import DiscoveryItem from 'Screens/Gameplay/Components/Discovery/DiscoveryWindow/DiscoveryItem';

export const renderDroppablesGrid = ({ gridConfig, droppablesState }) => {
	let result = [];
	for (let row = 0; row < gridConfig.rows; row++) {
		let resultRow = [];
		for (let col = 0; col < gridConfig.cols; col++) {
			const resultCell = createGeneralDroppable(row, col, gridConfig, droppablesState);
			resultRow.push(resultCell);
		}
		resultRow = (
			<div style={{ display: 'flex', flexDirection: 'row' }} key={gridConfig.name + '_row' + row}>
				{resultRow}
			</div>
		);
		result.push(resultRow);
	}
	result = (
		<div style={{ display: 'flex', flexDirection: 'column' }} key={gridConfig.name}>
			{result}
		</div>
	);
	return result;
};

const createGeneralDroppable = (row, col, gridConfig, droppablesState) => {
	const id = `${gridConfig.name}_r${row}c${col}`;
	const itemInState = droppablesState[id] ? droppablesState[id] : null;

	return (
		<Droppable type={gridConfig.draggablesType} droppableId={id} key={id} isDropDisabled={gridConfig.isDropDisabled}>
			{provided => (
				<DiscoveryItemDroppable {...provided.droppableProps} ref={provided.innerRef}>
					{provided.placeholder}
					<DiscoveryItem
						itemIndex={itemInState ? itemInState.itemIndex : null}
						id={id}
						isDragDisabled={itemInState ? itemInState.isDragDisabled : null}
					/>
				</DiscoveryItemDroppable>
			)}
		</Droppable>
	);
};
