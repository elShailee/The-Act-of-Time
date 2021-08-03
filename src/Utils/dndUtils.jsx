import characterData from 'ExampleData/characterInfoExampleData';
import { Droppable } from 'react-beautiful-dnd';
import { TestingStyledDroppable } from 'Screens/Gameplay/Components/Discovery/styles_crafting';
import DiscoveryItem from 'Screens/Gameplay/Components/Discovery/DiscoveryItem';

export const writeGridDataByConfig = (gridConfig, state) => {
	let newState = { ...state };

	if (gridConfig.isInventory) {
		for (let row = 0; row < gridConfig.rows; row++) {
			for (let col = 0; col < gridConfig.cols; col++) {
				const index = `${gridConfig.name}_r${row}c${col}`;
				const val = characterData.items[row * gridConfig.cols + col];
				newState = { ...newState, [index]: val };
			}
		}
	}

	return newState;
};
export const renderDroppablesGrid = (gridConfig, state) => {
	console.log(state);
	const result = [];
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
	return result;
};

const createGeneralDroppable = (row, col, gridConfig, state) => {
	const id = `${gridConfig.name}_r${row}c${col}`;
	const itemInState = state[id];

	return (
		<Droppable type={gridConfig.draggablesType} droppableId={id} key={id} isDropDisabled={gridConfig.isDropDisabled}>
			{provided => (
				<TestingStyledDroppable {...provided.droppableProps} ref={provided.innerRef}>
					{provided.placeholder}
					<DiscoveryItem content={itemInState} id={id} />
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
	newState[source.droppableId] = null;
	newState[destination.droppableId] = droppablesState[source.droppableId];
	return newState;
};
