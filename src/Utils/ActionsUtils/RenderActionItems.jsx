import React from 'react';
import { useSelector } from 'react-redux';
import ActionsTabItem from 'Screens/Gameplay/Components/Actions/ActionsTab/ActionsTabItem';
import assembleActionDataObject from 'Utils/ActionsUtils/assembleActionDataObject';

export function RenderActionTabItems(numOfItemsToRender) {
	const activeActions = useSelector(state => state.Actions.orderedActionsArray);
	if (!numOfItemsToRender) numOfItemsToRender = activeActions.length; //if no numOfItemsToRender was given - render all items.

	const actionItemsToRender = activeActions.slice(0, numOfItemsToRender); //returns only the first numOfItemsToRender items from the state
	const renderedActionItems = actionItemsToRender.map((item, index) => {
		const actionDataObject = assembleActionDataObject(activeActions, index);
		return <ActionsTabItem actionItem={actionDataObject} key={item.id} index={index} />;
	});
	return renderedActionItems;
}
