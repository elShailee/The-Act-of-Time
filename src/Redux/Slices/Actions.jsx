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
			const { orderedActionsArray } = state;
			const { destination, draggableId } = action.payload; //destenation is the new location that the object was draged to
			if (!destination) return state; //if it was draged out of the container it will return the existing status
			let savedAction;
			let filteredActionsArr = Array.from(orderedActionsArray).filter(element => {
				//creatring a new array of objects without the one we draged out
				if (draggableId !== element.id) return true;
				savedAction = element;
				return false;
			});
			filteredActionsArr.splice(destination.index, 0, savedAction); //puting the dragged object in the destenation place
			const newState = { ...state, orderedActionsArray: filteredActionsArr };
			return newState;
		},
	},
});

export const { applyActionsReorder } = ActionsSlice.actions;
export default ActionsSlice.reducer;
