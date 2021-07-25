import { Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 } from 'uuid';
import DiscoveryItem from 'Screens/Gameplay/Components/Discovery/DiscoveryItem';
import { TestingStyledDroppable, TestingStyledItem } from 'Screens/Gameplay/Components/Discovery/styles_crafting';
import texts from 'texts';
import charactherData from 'ExampleData/characterInfoExampleData';

export const renderDroppablesGrid = (gridConfig, dndState, setDndState) => {
	if (
		typeof gridConfig.rows !== 'number' ||
		gridConfig.rows <= 0 ||
		typeof gridConfig.cols !== 'number' ||
		gridConfig.cols <= 0 ||
		typeof gridConfig.draggablesType !== 'string' ||
		!gridConfig.draggablesType
	) {
		console.log(texts.errors.invalidProps_renderDroppablesGrid);
		return null;
	}

	const createGeneralDroppable = (row, col) => {
		const uuid = v4();
		const index = row * gridConfig.cols + col;
		const itemsLib = charactherData.items;
		const itemInLib = itemsLib[index];

		return (
			<Droppable type={gridConfig.draggablesType} droppableId={uuid} key={uuid} isDropDisabled={gridConfig.isDropDisabled}>
				{provided => (
					<TestingStyledDroppable {...provided.droppableProps} ref={provided.innerRef}>
						{provided.placeholder}
						<Draggable id={uuid} draggableId={uuid} index={0} isDragDisabled={gridConfig.isDragDisabled}>
							{draggableProvided => {
								if (itemInLib && gridConfig.isInventory) {
									dndState[uuid] = itemInLib;
									return (
										<TestingStyledItem
											{...draggableProvided.draggableProps}
											{...draggableProvided.dragHandleProps}
											ref={draggableProvided.innerRef}
										>
											<DiscoveryItem content={itemInLib} />
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

	const result = [];
	for (let row = 0; row < gridConfig.rows; row++) {
		let resultRow = [];
		for (let col = 0; col < gridConfig.cols; col++) {
			const dndCell = createGeneralDroppable(row, col);
			resultRow.push(dndCell);
		}
		resultRow = (
			<div style={{ display: 'flex', flexDirection: 'row' }} key={v4()}>
				{resultRow}
			</div>
		);
		result.push(resultRow);
	}
	console.log(dndState);
	return result;
};

export const applyItemPlacement = (result, dndState, setDndState) => {
	const { source, destination } = result;
	if (destination === null) return dndState;
	const newState = {
		...dndState,
	};
	newState[source.droppableId] = null;
	newState[destination.droppableId] = dndState[source.droppableId];
	console.log(newState);
	setDndState(newState);
};
