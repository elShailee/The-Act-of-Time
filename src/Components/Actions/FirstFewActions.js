import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { applyActionsReorder } from 'Redux/Slices/Actions';

export default function FirstFewActions() {
	const dispatch = useDispatch();
	const renderActionTabItems = useSelector(state => state.Actions.renderActionTabItems);
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
