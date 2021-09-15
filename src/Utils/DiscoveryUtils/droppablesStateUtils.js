import { itemsLib } from 'Assets/discovery/lib';

export const generateGridDataByConfig = gridConfig => {
	let newState = {};

	for (let row = 0; row < gridConfig.rows; row++) {
		for (let col = 0; col < gridConfig.cols; col++) {
			const droppableId = `${gridConfig.name}_r${row}c${col}`;
			const itemIndex = row * gridConfig.cols + col + 1;
			const isAnItem = itemsLib[itemIndex] !== undefined;
			newState = {
				...newState,
				[droppableId]: {
					itemIndex: gridConfig.isInventory && isAnItem ? itemIndex : null,
					isInventory: gridConfig.isInventory,
				},
			};
		}
	}

	return newState;
};

export const appliedItemDrag = ({ droppablesState, result }) => {
	const { source, destination } = result;
	if (destination === null) return droppablesState;
	const newState = {
		...droppablesState,
	};

	const newSourceDroppable = { ...droppablesState[source.droppableId] };
	if (!newSourceDroppable.isInventory) {
		newSourceDroppable.itemIndex = null;
	}
	newState[source.droppableId] = newSourceDroppable;

	const newDestinationDroppable = { ...droppablesState[destination.droppableId] };
	if (!newDestinationDroppable.isInventory) {
		newDestinationDroppable.itemIndex = droppablesState[source.droppableId].itemIndex;
	}
	newState[destination.droppableId] = newDestinationDroppable;

	return newState;
};
