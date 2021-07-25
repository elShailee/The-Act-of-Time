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

const getStateByStateCode = (state, stateCode) => {
	const matches = {
		'CR-IN': state.craft.input,
		'CR-RS': state.craft.result,
	};
	return matches[stateCode];
};

const DiscoverySlice = createSlice({
	name: 'Discovery',
	initialState,
	reducers: {
		applyItemPlacement: (state, action) => {
			const { source, destination /*, draggableId*/ } = action.payload;
			if (destination === null) return state;
			const sourceIndex = parseInt(source.droppableId.substr(0, 3));
			const sourceStateCode = source.droppableId.substr(4, 5);
			const destinationIndex = parseInt(destination.droppableId.substr(0, 3));
			const destinationStateCode = destination.droppableId.substr(4, 5);

			const newState = JSON.parse(JSON.stringify(state));
			const sourceState = getStateByStateCode(newState, sourceStateCode);
			const destinationState = getStateByStateCode(newState, destinationStateCode);
			destinationState[destinationIndex] = sourceState[sourceIndex];
			sourceState[sourceIndex] = null;
			return newState;
		},
	},
});

export const { applyItemPlacement } = DiscoverySlice.actions;
export default DiscoverySlice.reducer;
