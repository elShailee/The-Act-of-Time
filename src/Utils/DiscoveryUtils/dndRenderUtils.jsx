import { Droppable, Draggable } from 'react-beautiful-dnd';
import { DiscoveryItemDroppable } from 'Screens/Gameplay/Components/Discovery/DiscoveryWindow/styles_window';
import { RowContainer, TableContainer } from './styles';
import DiscoveryItemStatic from 'Screens/Gameplay/Components/Discovery/DiscoveryWindow/DiscoveryItemStatic';
import DiscoveryItemByState from 'Screens/Gameplay/Components/Discovery/DiscoveryWindow/DiscoveryItemByState';
import characterInfoExampleData from 'ExampleData/characterInfoExampleData';

export const renderDroppablesGrid = ({ gridConfig }) => {
	let result = [];
	for (let row = 0; row < gridConfig.rows; row++) {
		let resultRow = [];
		for (let col = 0; col < gridConfig.cols; col++) {
			const resultCell = itemDroppableGenerator(row, col, gridConfig);
			resultRow.push(resultCell);
		}
		resultRow = <RowContainer key={gridConfig.name + '_row' + row}>{resultRow}</RowContainer>;
		result.push(resultRow);
	}
	result = <TableContainer key={gridConfig.name}>{result}</TableContainer>;
	return result;
};

const itemDroppableGenerator = (row, col, gridConfig) => {
	const id = `${gridConfig.name}_r${row}c${col}`;
	const itemIndex = row * gridConfig.cols + col;

	const itemIndexIfFound = characterInfoExampleData.discoveredItems.find(item => item === itemIndex);
	const isFound = itemIndexIfFound === itemIndex;

	//create a custom style to avoid dropping animation from react-beautiful-dnd.
	const nonAnimatedStyle = (style, snapshot) => {
		if (!snapshot.isDropAnimating) {
			return style;
		}
		return {
			...style,
			// cannot be exactly 0, due to react-beautiful-dnd's mechanics
			transitionDuration: `0.001s`,
		};
	};

	return (
		<Droppable type={gridConfig.droppablesType} droppableId={id} key={id} isDropDisabled={gridConfig.isDropDisabled}>
			{droppableProvided => (
				<DiscoveryItemDroppable {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
					{droppableProvided.placeholder}

					<Draggable
						draggableId={id}
						index={0}
						isDragDisabled={(gridConfig.isInventory && !isFound) || gridConfig.isDragDisabled}
					>
						{(draggableProvided, snapshot) => (
							<div
								ref={draggableProvided.innerRef}
								{...draggableProvided.draggableProps}
								{...draggableProvided.dragHandleProps}
								style={nonAnimatedStyle(draggableProvided.draggableProps.style, snapshot)}
							>
								{gridConfig.isInventory ? (
									<DiscoveryItemStatic itemIndex={itemIndex} isFound={isFound} />
								) : (
									<DiscoveryItemByState id={id} />
								)}
							</div>
						)}
					</Draggable>
				</DiscoveryItemDroppable>
			)}
		</Droppable>
	);
};
