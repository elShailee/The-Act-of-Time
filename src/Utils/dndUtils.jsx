import characterData from 'ExampleData/characterInfoExampleData';
import { Droppable } from 'react-beautiful-dnd';
import { TestingStyledDroppable } from 'Screens/Gameplay/Components/Discovery/styles_crafting';
import DiscoveryItem from 'Screens/Gameplay/Components/Discovery/DiscoveryItem';

export const writeGridDataByConfig = (gridConfig, state) => {
	let newState = { ...state };

	for (let row = 0; row < gridConfig.rows; row++) {
		for (let col = 0; col < gridConfig.cols; col++) {
			const index = `${gridConfig.name}_r${row}c${col}`;
			const val = characterData.items[row * gridConfig.cols + col];
			newState = {
				...newState,
				[index]: { value: gridConfig.isInventory ? val : null, isInventory: gridConfig.isInventory },
			};
		}
	}

	return newState;
};
export const renderDroppablesGrid = (gridConfig, state) => {
	let result = [];
	for (let row = 0; row < gridConfig.rows; row++) {
		let resultRow = [];
		for (let col = 0; col < gridConfig.cols; col++) {
			const resultCell = createGeneralDroppable(row, col, gridConfig, state);
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

const createGeneralDroppable = (row, col, gridConfig, state) => {
	const id = `${gridConfig.name}_r${row}c${col}`;
	const itemInState = state[id] ? state[id] : null;

	return (
		<Droppable type={gridConfig.draggablesType} droppableId={id} key={id} isDropDisabled={gridConfig.isDropDisabled}>
			{provided => (
				<TestingStyledDroppable {...provided.droppableProps} ref={provided.innerRef}>
					{provided.placeholder}
					<DiscoveryItem content={itemInState ? itemInState.value : null} id={id} />
				</TestingStyledDroppable>
			)}
		</Droppable>
	);
};

export const applyItemPlacement = (result, droppablesState) => {
	const { source, destination } = result;
	if (destination === null) return droppablesState;
	const newState = {
		...droppablesState,
	};

	const newSourceDraggable = { ...droppablesState[source.droppableId] };
	if (!newSourceDraggable.isInventory) {
		newSourceDraggable.value = null;
	}
	newState[source.droppableId] = newSourceDraggable;

	const newDestinationDraggable = { ...droppablesState[destination.droppableId] };
	if (!newDestinationDraggable.isInventory) {
		newDestinationDraggable.value = droppablesState[source.droppableId].value;
	}
	newState[destination.droppableId] = newDestinationDraggable;

	return newState;
};
