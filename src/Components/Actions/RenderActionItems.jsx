import React from 'react';
import { useSelector } from 'react-redux';
import actionsLibrary from 'ExampleData/actionsLibraryExampleData';
import ActionsTabItem from 'Components/Actions/ActionsTabItem';

const actionsItemsTypes = { tabItem: 'tabItem' };
export default function renderActionTabItems(numOfItemsToRender) {
	return RenderActionItems(actionsItemsTypes.tabItem, numOfItemsToRender);
}

function RenderActionItems(renderType, numOfItemsToRender) {
	const orderedActionsArray = useSelector(state => state.Actions.orderedActionsArray);
	if (!numOfItemsToRender) numOfItemsToRender = orderedActionsArray.length;
	const itemsToRenderIds = orderedActionsArray.slice(0, numOfItemsToRender);
	const renderedActionItems = itemsToRenderIds.map((itemId, index) => {
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
