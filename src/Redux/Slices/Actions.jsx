import activeActions from 'ExampleData/activeActionsExampleData';
import { createSlice } from '@reduxjs/toolkit';

const getActionsOrder = () => {
	const actionsOrder = [];
	for (const action in activeActions) {
		actionsOrder.push(activeActions[action]);
	}
	return actionsOrder;
};

const initialState = {
	orderedActionsArray: getActionsOrder(),
};

const ActionsSlice = createSlice({
	name: 'Actions',
	initialState,
	reducers: {
		applyActionsReorder: (state, action) => {
			const { orderedActionsArray } = Object.assign({}, state);
			const { source, destination, draggableId } = action.payload;
			if (!destination) return orderedActionsArray;
			if (source.index === destination.index && source.draggableId === destination.draggableId) return orderedActionsArray;
			let newActionsOrder = Array.from(orderedActionsArray);
			let savedAction;
			let filterdActionsArr = newActionsOrder.filter(ele => {
				if (draggableId !== ele.id) return true;
				savedAction = ele;
				return false;
			});
			filterdActionsArr.splice(destination.index, 0, savedAction);
			const newState = { ...state, orderedActionsArray: filterdActionsArr };
			return newState;
		},
	},
});

export const { applyActionsReorder } = ActionsSlice.actions;
export default ActionsSlice.reducer;
