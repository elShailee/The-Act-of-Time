import characterData from 'ExampleData/characterInfoExampleData';
import { Droppable } from 'react-beautiful-dnd';
import { TestingStyledDroppable } from 'Screens/Gameplay/Components/Discovery/styles_crafting';
import DiscoveryItem from 'Screens/Gameplay/Components/Discovery/DiscoveryItem';

export const writeGridDataByConfig = (gridConfig, state) => {
	let newState = { ...state };

	for (let row = 0; row < gridConfig.rows; row++) {
		for (let col = 0; col < gridConfig.cols; col++) {
			const stateIndex = `${gridConfig.name}_r${row}c${col}`;
			const itemIndex = row * gridConfig.cols + col + 1;
			const isFound = characterData.items[itemIndex];
			newState = {
				...newState,
				[stateIndex]: {
					value: gridConfig.isInventory ? (isFound ? itemIndex : `i${itemIndex}`) : null,
					isInventory: gridConfig.isInventory,
					isFound,
				},
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
					<DiscoveryItem
						content={itemInState ? itemInState.value : null}
						isFound={itemInState ? itemInState.isFound : false}
						id={id}
					/>
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
		newDestinationDraggable.isFound = droppablesState[source.droppableId].isFound;
	}
	newState[destination.droppableId] = newDestinationDraggable;

	return newState;
};
