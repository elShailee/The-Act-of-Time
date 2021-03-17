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
			const { orderedActionsArray: actionsInOrder } = state;
			const { source, destination, draggableId } = action.payload;
			if (!destination) return actionsInOrder;
			if (source.index === destination.index && source.draggableId === destination.draggableId) return actionsInOrder;
			let newActionsOrder = Array.from(actionsInOrder);
			newActionsOrder.splice(source.index, 1);
			newActionsOrder.splice(destination.index, 0, draggableId);
			const newState = { ...state, actionsOrder: newActionsOrder };
			return newState;
		},
	},
});

export const { applyActionsReorder } = ActionsSlice.actions;
export default ActionsSlice.reducer;
