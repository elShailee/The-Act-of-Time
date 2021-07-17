import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { craftInputItems, craftResultItems } from 'Redux/Selectors/DiscoveryItemsSelectors';
import { applyItemPlacement } from 'Redux/Slices/Discovery';
import { renderDroppablesGrid } from 'Utils/dndUtils';

export default function CraftingInterface() {
	const dispatch = useDispatch();
	const gridConfig = {
		rows: 3,
		cols: 3,
		draggablesType: 'DiscoveryItems',
		selector: craftInputItems,
		isDropDisabled: false,
		isDragDisabled: false,
		isValueFixed: true,
	};
	const gridConfig2 = {
		rows: 2,
		cols: 2,
		draggablesType: 'DiscoveryItems',
		selector: craftResultItems,
		isDropDisabled: false,
		isDragDisabled: false,
		isValueFixed: true,
	};
	return (
		<DragDropContext onDragEnd={result => dispatch(applyItemPlacement(result))}>
			{renderDroppablesGrid(gridConfig)}
			{renderDroppablesGrid(gridConfig2)}
		</DragDropContext>
	);
}
