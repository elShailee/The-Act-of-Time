import { itemsLib } from 'Assets/discovery/lib';
import texts from 'texts';

export const getDroppablesGridState = gridConfig => {
	const { name, rows, cols, droppablesType } = gridConfig;
	const isValidGridConfig = name.length > 0 && rows > 0 && cols > 0 && droppablesType.length > 1;

	if (!isValidGridConfig) {
		console.log(texts.errors.invalidProps_getDroppablesGridState);
		return {};
	}

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

export const getDroppablesStateAfterDrag = ({ droppablesState, result }) => {
	const { source, destination } = result;

	const sourceDroppable = droppablesState[source.droppableId];
	const destinationDroppable = droppablesState[destination?.droppableId];

	const newState = { ...droppablesState };
	const newSourceDroppable = { ...sourceDroppable };
	const newDestinationDroppable = { ...destinationDroppable };

	if (!sourceDroppable.isInventory) {
		newSourceDroppable.itemIndex = destinationDroppable?.itemIndex;
		newState[source.droppableId] = newSourceDroppable;
	}

	if (destinationDroppable) {
		newDestinationDroppable.itemIndex = sourceDroppable.itemIndex;
		newState[destination.droppableId] = newDestinationDroppable;
	}

	return newState;
};
