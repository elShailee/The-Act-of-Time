import { Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 } from 'uuid';
import DiscoveryItem from 'Screens/Gameplay/Components/Discovery/DiscoveryItem';
import { TestingStyledDroppable, TestingStyledItem } from 'Screens/Gameplay/Components/Discovery/styles_crafting';
import texts from 'texts';

export const renderDroppablesGrid = gridConfig => {
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

	const GeneralDrppable = (row, col) => {
		let index = '00' + (row * gridConfig.cols + col);
		index = index.substr(index.length - 3, 3);
		const uuid = v4();
		return (
			<Droppable
				type={gridConfig.draggablesType}
				droppableId={index + '_' + uuid}
				key={index + '_' + uuid}
				isDropDisabled={gridConfig.isDropDisabled}
			>
				{provided => (
					<TestingStyledDroppable {...provided.droppableProps} ref={provided.innerRef}>
						{provided.placeholder}
						<Draggable
							id={index + '_' + uuid}
							draggableId={index + '_' + uuid}
							index={0}
							isDragDisabled={gridConfig.isDragDisabled}
						>
							{draggableProvided => (
								<TestingStyledItem
									{...draggableProvided.draggableProps}
									{...draggableProvided.dragHandleProps}
									ref={draggableProvided.innerRef}
								>
									<DiscoveryItem index={parseInt(index)} selector={gridConfig.selector} />
								</TestingStyledItem>
							)}
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
			resultRow.push(GeneralDrppable(row, col));
		}
		resultRow = (
			<div style={{ display: 'flex', flexDirection: 'row' }} key={gridConfig.draggablesType + '_r' + row}>
				{resultRow}
			</div>
		);
		result.push(resultRow);
	}
	return result;
};
