import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	craft: {
		input: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
		// tool: "",
		result: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
	},
	harvest: {
		// tool: "",
		// duration: 0,
		// output:""
	},
};

const DiscoverySlice = createSlice({
	name: 'Discovery',
	initialState,
	reducers: {
		applyItemPlacement: (state, action) => {
			const { source, destination /*, draggableId*/ } = action.payload;
			if (destination === null) return state;
			const sourceIndex = parseInt(source.droppableId.substr(0, 3));
			const destinationIndex = parseInt(destination.droppableId.substr(0, 3));

			let newCraftInput = Array.from(state.craft.input);
			newCraftInput[sourceIndex] = '';
			newCraftInput[destinationIndex] = state.craft.input[sourceIndex];
			return {
				...state,
				craft: {
					...state.craft,
					input: newCraftInput,
				},
			};
		},
	},
});

export const { applyItemPlacement } = DiscoverySlice.actions;
export default DiscoverySlice.reducer;
