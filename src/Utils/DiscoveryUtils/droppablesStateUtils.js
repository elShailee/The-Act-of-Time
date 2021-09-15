import { itemsLib } from 'Assets/discovery/lib';

export const generateGridDataByConfig = gridConfig => {
	let newState = {};

	for (let row = 0; row < gridConfig.rows; row++) {
		for (let col = 0; col < gridConfig.cols; col++) {
			const stateIndex = `${gridConfig.name}_r${row}c${col}`;
			const itemIndex = row * gridConfig.cols + col + 1;
			const isAnItem = itemsLib[itemIndex] !== undefined;
			newState = {
				...newState,
				[stateIndex]: {
					itemIndex: gridConfig.isInventory && isAnItem ? itemIndex : null,
					isInventory: gridConfig.isInventory,
					isDragDisabled: gridConfig.isDragDisabled,
					isDropDisabled: gridConfig.isDropDisabled,
				},
			};
		}
	}

	return newState;
};

export const applyItemDrag = ({ droppablesState, result }) => {
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

export const clearGridData = ({ gridConfig, droppablesState }) => {
	let newState = { ...droppablesState };
	for (let row = 0; row < gridConfig.rows; row++) {
		for (let col = 0; col < gridConfig.cols; col++) {
			const stateIndex = `${gridConfig.name}_r${row}c${col}`;
			newState = {
				...newState,
				[stateIndex]: {
					itemIndex: null,
					isInventory: false,
				},
			};
		}
	}
	return newState;
};
