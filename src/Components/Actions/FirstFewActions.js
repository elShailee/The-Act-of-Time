import React, { useEffect, useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { ActionsContext } from 'Contexts/ActionsContext';

export default function FirstFewActions() {
	const actionsContext = useContext(ActionsContext);
	const actionState = useSelector(state => state.Actions.actions);
	useEffect(() => {
		console.log(actionState);
	}, [actionState]);
	return (
		<DragDropContext onDragEnd={result => actionsContext.applyActionsReorder(result)}>
			<Droppable type='firstFewActions' droppableId='FirstFewActionsDroppable'>
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{actionsContext.renderActionTabItems(5)}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}
