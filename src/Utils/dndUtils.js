import { Droppable } from 'react-beautiful-dnd';
import { TestingStyledDroppable } from 'Screens/Gameplay/Components/Discovery/styles_crafting';
import texts from 'texts';

export const renderDroppablesGrid = (gridRows, gridCols, type) => {
	if (
		typeof gridRows !== 'number' ||
		gridRows <= 0 ||
		typeof gridCols !== 'number' ||
		gridCols <= 0 ||
		typeof type !== 'string' ||
		!type
	) {
		console.log(texts.errors.invalidProps_renderDroppablesGrid);
		return null;
	}

	const GeneralDrppable = key => (
		<Droppable type={type} droppableId={key} key={key}>
			{provided => (
				<TestingStyledDroppable {...provided.droppableProps} ref={provided.innerRef}>
					{provided.placeholder}
				</TestingStyledDroppable>
			)}
		</Droppable>
	);

	const result = [];
	for (let row = 0; row < gridRows; row++) {
		let resultRow = [];
		for (let col = 0; col < gridCols; col++) {
			resultRow.push(GeneralDrppable(type + '_r' + row + 'c' + col));
		}
		resultRow = (
			<div style={{ display: 'flex', flexDirection: 'row' }} key={type + '_r' + row}>
				{resultRow}
			</div>
		);
		result.push(resultRow);
	}
	return result;
};
