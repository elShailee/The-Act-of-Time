import React from 'react';
import { useSelector } from 'react-redux';
import ActionsTabItem from 'Screens/Gameplay/Components/Actions/ActionsTab/ActionsTabItem';
import assembleActionDataObject from 'Utils/ActionsUtils/assembleActionDataObject';
import texts from 'texts';

//we define actionItem types as there will be actionItems rendered at both the tab and window,
//and we want to use similiar logic for both, based on difference in the actionItem component alone.
const actionsItemsTypes = { tabItem: 'tabItem' };

//exported interface function
export function renderActionTabItems(numOfItemsToRender) {
	return RenderActionItems(actionsItemsTypes.tabItem, numOfItemsToRender);
}

//private logical function
function RenderActionItems(renderType, numOfItemsToRender) {
	const activeActions = useSelector(state => state.Actions.orderedActionsArray);
	if (!numOfItemsToRender) numOfItemsToRender = activeActions.length;

	const actionItemsToRender = activeActions.slice(0, numOfItemsToRender); //returns only the first numOfItemsToRender items from the state
	const renderedActionItems = actionItemsToRender.map((item, index) => {
		//goes through all the numOfItemsToRender first items and returns a corresponding component for each one of them
		const actionDataObject = assembleActionDataObject(activeActions, index);

		if (renderType === actionsItemsTypes.tabItem) {
			return <ActionsTabItem actionItem={actionDataObject} key={item.id} index={index} />;
		}
		console.log(texts.errors.invalidActionType);
		return null;
	});
	return renderedActionItems;
}
