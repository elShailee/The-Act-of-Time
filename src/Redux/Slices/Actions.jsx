import activeActions from 'ExampleData/activeActionsExampleData';
import actionsLibrary from 'ExampleData/actionsLibraryExampleData';
import ActionsTabItem from 'Components/Actions/ActionsTabItem';
import { createSlice } from '@reduxjs/toolkit';

const getActionsOrder = () => {
	const actionsOrder = [];
	for (const action in activeActions) {
		actionsOrder.push(action);
	}
	return actionsOrder;
};

const initialState = {
	actions: activeActions,
	actionsOrder: getActionsOrder(),
};

const ActionsSlice = createSlice({
	name: 'Actions',
	initialState,
	reducers: {
		applyActionsReorder: (state, action) => {
			const { actionsOrder } = state;
			const { source, destination, draggableId } = action.payload;

			if (!destination) return actionsOrder;
			if (source.index === destination.index && source.draggableId === destination.draggableId) return actionsOrder;

			let newActionsOrder = Array.from(actionsOrder);
			newActionsOrder.splice(source.index, 1);
			newActionsOrder.splice(destination.index, 0, draggableId);
			const newState = this.setState({ actionsOrder: newActionsOrder });
			return newState;
		},

		renderActionTabItems: (state, action) => {
			const newState = renderActionItems(state, this.actionsItemsTypes.tabItem, action.payload);
			return newState;
		},

		generateActionObject: (state, action) => {
			const actionItemInDB = state.actions[action.payload];

			const lib = actionsLibrary;
			const actionItemInLib = { ...lib[actionItemInDB.actionType] };

			const fullActionItem = Object.assign({}, actionItemInLib, actionItemInDB);
			return fullActionItem;
		},
	},
});

const actionsItemsTypes = { tabItem: 'tabItem' };

const renderActionItems = (state, renderType, numOfItemsToRender) => {
	const { actionsOrder } = state;
	if (!numOfItemsToRender) numOfItemsToRender = actionsOrder.length;

	const itemsToRenderIds = actionsOrder.slice(0, numOfItemsToRender);
	const renderedActionItems = itemsToRenderIds.map((itemId, index) => {
		const actionObject = this.generateActionObject(itemId);
		return generateActionItemJSX(actionObject, index, renderType);
	});
	return renderedActionItems;
};

const generateActionItemJSX = (actionItem, index, renderType) => {
	if (renderType === actionsItemsTypes.tabItem) {
		return <ActionsTabItem actionItem={actionItem} key={actionItem.id} index={index} />;
	}
};
export const { applyActionsReorder, renderActionTabItems, generateActionObject } = ActionsSlice.actions;
export default ActionsSlice.reducer;
