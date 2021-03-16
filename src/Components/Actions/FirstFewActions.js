import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { applyActionsReorder } from 'Redux/Slices/Actions';
import actionsLibrary from 'ExampleData/actionsLibraryExampleData';
import ActionsTabItem from 'Components/Actions/ActionsTabItem';
export default function FirstFewActions() {
	const dispatch = useDispatch();
	const actionsState = useSelector(state => state.Actions);

	return (
		<DragDropContext onDragEnd={result => dispatch(applyActionsReorder(result))}>
			<Droppable type='firstFewActions' droppableId='FirstFewActionsDroppable'>
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{renderActionItems(actionsState, 5)}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}

//TODO - need to be moved to other place as business logic
const renderActionItems = (actionsState, numOfItemsToRender) => {
	const actionsOrder = actionsState.actionsOrder;
	if (!numOfItemsToRender) numOfItemsToRender = actionsOrder.length;
	const itemsToRenderIds = actionsOrder.slice(0, numOfItemsToRender);
	const renderedActionItems = itemsToRenderIds.map((itemId, index) => {
		const actionObject = generateActionObject(actionsState, itemId);
		return generateActionItemJSX(actionObject, index);
	});
	return renderedActionItems;
};

const generateActionObject = (state, actionItemId) => {
	const actionItemInDB = state.actions[actionItemId];

	const lib = actionsLibrary;
	const actionItemInLib = { ...lib[actionItemInDB.actionType] };

	const fullActionItem = Object.assign({}, actionItemInLib, actionItemInDB);
	return fullActionItem;
};

const generateActionItemJSX = (actionItem, index) => {
	return <ActionsTabItem actionItem={actionItem} key={actionItem.id} index={index} />;
};
