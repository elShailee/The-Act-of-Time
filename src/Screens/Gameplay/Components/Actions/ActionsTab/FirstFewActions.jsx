import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { applyActionsReorder } from 'Redux/Slices/Actions';
import { renderActionTabItems } from 'Utils/RenderActionItems';

export default function FirstFewActions() {
	const dispatch = useDispatch();
	return (
		<DragDropContext onDragEnd={result => dispatch(applyActionsReorder(result))}>
			<Droppable type='firstFewActions' droppableId='FirstFewActionsDroppable'>
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{renderActionTabItems(5)}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}