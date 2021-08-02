import characterData from 'ExampleData/characterInfoExampleData';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { TestingStyledDroppable, TestingStyledItem } from 'Screens/Gameplay/Components/Discovery/styles_crafting';
import DiscoveryItem from 'Screens/Gameplay/Components/Discovery/DiscoveryItem';

export const writeGridDataByConfig = (gridConfig, state) => {
	let newState = { ...state };

	for (let row = 0; row < gridConfig.rows; row++) {
		for (let col = 0; col < gridConfig.cols; col++) {
			const index = `${gridConfig.name}_r${row}c${col}`;
			const val = characterData.items[row * gridConfig.cols + col];
			newState = { ...newState, [index]: val };
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
			const dndCell = createGeneralDroppable(row, col, gridConfig, state);
			resultRow.push(dndCell);
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
	const index = row * gridConfig.cols + col;
	const itemsLib = characterData.items;
	const itemInLib = itemsLib[index];
	const itemInState = state[id];

	return (
		<Droppable type={gridConfig.draggablesType} droppableId={id} key={id} isDropDisabled={gridConfig.isDropDisabled}>
			{provided => (
				<TestingStyledDroppable {...provided.droppableProps} ref={provided.innerRef}>
					{provided.placeholder}
					<Draggable id={id} draggableId={id} index={0} isDragDisabled={gridConfig.isDragDisabled}>
						{draggableProvided => {
							if (itemInLib && gridConfig.isInventory) {
								return (
									<TestingStyledItem
										{...draggableProvided.draggableProps}
										{...draggableProvided.dragHandleProps}
										ref={draggableProvided.innerRef}
									>
										<DiscoveryItem content={itemInState} />
									</TestingStyledItem>
								);
							} else {
								return (
									<div
										{...draggableProvided.draggableProps}
										{...draggableProvided.dragHandleProps}
										ref={draggableProvided.innerRef}
									/>
								);
							}
						}}
					</Draggable>
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

// import { Droppable, Draggable } from 'react-beautiful-dnd';
// import { v4 } from 'uuid';
// import DiscoveryItem from 'Screens/Gameplay/Components/Discovery/DiscoveryItem';
// import { TestingStyledDroppable, TestingStyledItem } from 'Screens/Gameplay/Components/Discovery/styles_crafting';
// import texts from 'texts';

// export const renderDroppablesGrid = (gridConfig, dndState, setDndState) => {
// 	if (
// 		typeof gridConfig.rows !== 'number' ||
// 		gridConfig.rows <= 0 ||
// 		typeof gridConfig.cols !== 'number' ||
// 		gridConfig.cols <= 0 ||
// 		typeof gridConfig.draggablesType !== 'string' ||
// 		!gridConfig.draggablesType
// 	) {
// 		console.log(texts.errors.invalidProps_renderDroppablesGrid);
// 		return null;
// 	}

// 	const createGeneralDroppable = (row, col) => {
// 		const uuid = v4();
// 		const index = row * gridConfig.cols + col;
// 		const itemsLib = charactherData.items;
// 		const itemInLib = itemsLib[index];

// 		return (
// 			<Droppable type={gridConfig.draggablesType} droppableId={uuid} key={uuid} isDropDisabled={gridConfig.isDropDisabled}>
// 				{provided => (
// 					<TestingStyledDroppable {...provided.droppableProps} ref={provided.innerRef}>
// 						{provided.placeholder}
// 						<Draggable id={uuid} draggableId={uuid} index={0} isDragDisabled={gridConfig.isDragDisabled}>
// 							{draggableProvided => {
// 								if (itemInLib && gridConfig.isInventory) {
// 									dndState[uuid] = itemInLib;
// 									return (
// 										<TestingStyledItem
// 											{...draggableProvided.draggableProps}
// 											{...draggableProvided.dragHandleProps}
// 											ref={draggableProvided.innerRef}
// 										>
// 											<DiscoveryItem content={itemInLib} />
// 										</TestingStyledItem>
// 									);
// 								} else {
// 									return (
// 										<div
// 											{...draggableProvided.draggableProps}
// 											{...draggableProvided.dragHandleProps}
// 											ref={draggableProvided.innerRef}
// 										/>
// 									);
// 								}
// 							}}
// 						</Draggable>
// 					</TestingStyledDroppable>
// 				)}
// 			</Droppable>
// 		);
// 	};

// 	const result = [];
// 	for (let row = 0; row < gridConfig.rows; row++) {
// 		let resultRow = [];
// 		for (let col = 0; col < gridConfig.cols; col++) {
// 			const dndCell = createGeneralDroppable(row, col);
// 			resultRow.push(dndCell);
// 		}
// 		resultRow = (
// 			<div style={{ display: 'flex', flexDirection: 'row' }} key={v4()}>
// 				{resultRow}
// 			</div>
// 		);
// 		result.push(resultRow);
// 	}
// 	console.log(dndState);
// 	return result;
// };

// export const applyItemPlacement = (result, dndState, setDndState) => {
// 	const { source, destination } = result;
// 	if (destination === null) return dndState;
// 	const newState = {
// 		...dndState,
// 	};
// 	newState[source.droppableId] = null;
// 	newState[destination.droppableId] = dndState[source.droppableId];
// 	console.log(newState);
// 	setDndState(newState);
// };
