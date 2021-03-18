import React from 'react';
import { useSelector } from 'react-redux';
import actionsLibrary from 'ExampleData/actionsLibraryExampleData';
import ActionsTabItem from 'Components/Actions/ActionsTabItem';

const actionsItemsTypes = { tabItem: 'tabItem' }; //this is for futre use so we could have more items type
export default function renderActionTabItems(numOfItemsToRender) {
	return RenderActionItems(actionsItemsTypes.tabItem, numOfItemsToRender);
}

function RenderActionItems(renderType, numOfItemsToRender) {
	const orderedActionsArray = useSelector(state => state.Actions.orderedActionsArray);
	if (!numOfItemsToRender) numOfItemsToRender = orderedActionsArray.length;
	const itemsIdsToRender = orderedActionsArray.slice(0, numOfItemsToRender); //returns only the first numOfItemsToRender items from the state
	const renderedActionItems = itemsIdsToRender.map((itemId, index) => {
		//goes throw all the numOfItemsToRender first items and creats an ActionItemJSX for each one of them
		const actionObject = generateActionObject(orderedActionsArray, index);
		return generateActionItemJSX(actionObject, index, renderType);
	});
	return renderedActionItems;
}

const generateActionObject = (orderedActionsArray, actionIndex) => {
	const actionItemInDB = orderedActionsArray[actionIndex];
	const lib = actionsLibrary;
	const actionItemInLib = { ...lib[actionItemInDB.actionType] };
	const fullActionItem = Object.assign({}, actionItemInLib, actionItemInDB);
	return fullActionItem;
};

const generateActionItemJSX = (actionItem, index, renderType) => {
	if (renderType === actionsItemsTypes.tabItem) {
		return <ActionsTabItem actionItem={actionItem} key={actionItem.id} index={index} />;
	}
};
