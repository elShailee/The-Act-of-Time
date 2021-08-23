import characterData from 'ExampleData/characterInfoExampleData';
import { itemsLib } from 'Assets/discovery/lib';

export const generateGridDataByConfig = (gridConfig, state) => {
	let newState = { ...state };

	for (let row = 0; row < gridConfig.rows; row++) {
		for (let col = 0; col < gridConfig.cols; col++) {
			const stateIndex = `${gridConfig.name}_r${row}c${col}`;
			const itemIndex = row * gridConfig.cols + col + 1;
			const isFound = characterData.items.find(item => item === itemIndex) === itemIndex;
			const isAnItem = itemsLib[itemIndex] !== undefined;
			newState = {
				...newState,
				[stateIndex]: {
					itemIndex: gridConfig.isInventory && isAnItem ? itemIndex : null,
					isInventory: gridConfig.isInventory,
					isFound,
				},
			};
		}
	}

	return newState;
};

export const handleItemPlacement = (result, droppablesState) => {
	const { source, destination } = result;
	if (destination === null) return droppablesState;
	const newState = {
		...droppablesState,
	};

	const newSourceDraggable = { ...droppablesState[source.droppableId] };
	if (!newSourceDraggable.isInventory) {
		newSourceDraggable.itemIndex = null;
	}
	newState[source.droppableId] = newSourceDraggable;

	const newDestinationDraggable = { ...droppablesState[destination.droppableId] };
	if (!newDestinationDraggable.isInventory) {
		newDestinationDraggable.itemIndex = droppablesState[source.droppableId].itemIndex;
		newDestinationDraggable.isFound = droppablesState[source.droppableId].isFound;
	}
	newState[destination.droppableId] = newDestinationDraggable;

	return newState;
};
