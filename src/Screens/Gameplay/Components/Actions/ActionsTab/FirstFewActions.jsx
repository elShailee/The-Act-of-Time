import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { applyActionsReorder } from 'Redux/Slices/Actions';
import { RenderActionTabItems } from 'Utils/ActionsUtils/RenderActionItems';
import { ActionsDroppable } from './styles';

export default function FirstFewActions() {
	const dispatch = useDispatch();
	return (
		<DragDropContext onDragEnd={result => dispatch(applyActionsReorder(result))}>
			<Droppable type='firstFewActions' droppableId='FirstFewActionsDroppable'>
				{provided => (
					<ActionsDroppable {...provided.droppableProps} ref={provided.innerRef}>
						{RenderActionTabItems(5)}
						{provided.placeholder}
					</ActionsDroppable>
				)}
			</Droppable>
		</DragDropContext>
	);
}
