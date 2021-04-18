import React from 'react';
import { useSelector } from 'react-redux';
import ActionsTabItem from 'Screens/Gameplay/Components/Actions/ActionsTab/ActionsTabItem';
import assembleActionDataItem from 'Utils/assembleActionDataObject';
import texts from 'texts';
import orderedActionsArraySelector from 'Redux/Selectors/ActionsSelectors';
const actionsItemsTypes = { tabItem: 'tabItem' }; //this is for futre use so we could have more items type
export function renderActionTabItems(numOfItemsToRender) {
	return RenderActionItems(actionsItemsTypes.tabItem, numOfItemsToRender);
}

function RenderActionItems(renderType, numOfItemsToRender) {
	const orderedActionsArray = useSelector(orderedActionsArraySelector);
	if (!numOfItemsToRender) numOfItemsToRender = orderedActionsArray.length;
	const itemsActionsToRender = orderedActionsArray.slice(0, numOfItemsToRender); //returns only the first numOfItemsToRender items from the state
	const renderedActionItems = itemsActionsToRender.map((itemId, index) => {
		//goes through all the numOfItemsToRender first items and returns a corresponding component for each one of them
		const actionDataObject = assembleActionDataItem(orderedActionsArray, index);

		if (renderType === actionsItemsTypes.tabItem) {
			return <ActionsTabItem actionItem={actionDataObject} key={actionDataObject.id} index={index} />;
		}
		console.log(texts.errors.invalidActionType);
		return null;
	});
	return renderedActionItems;
}
