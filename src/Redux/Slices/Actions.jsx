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
			console.log(orderedActionsArray);
			const { source, destination, draggableId } = action.payload;
			if (!destination) return orderedActionsArray;
			if (source.index === destination.index && source.draggableId === destination.draggableId) return orderedActionsArray;
			let newActionsOrder = Array.from(orderedActionsArray);
			newActionsOrder.splice(source.index, 1);
			newActionsOrder.splice(destination.index, 0, draggableId);
			const newState = { ...state, orderedActionsArray: newActionsOrder };
			return newState;
		},
	},
});

export const { applyActionsReorder } = ActionsSlice.actions;
export default ActionsSlice.reducer;
