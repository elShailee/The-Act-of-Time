import activeActions from 'ExampleData/activeActionsExampleData';
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
			const newState = { ...state, actionsOrder: newActionsOrder };
			return newState;
		},
	},
});

export const { applyActionsReorder } = ActionsSlice.actions;
export default ActionsSlice.reducer;
