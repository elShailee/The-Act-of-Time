import { createSlice } from '@reduxjs/toolkit';
import { appliedItemDrag, getDroppablesGridState } from 'Utils/DiscoveryUtils/droppablesStateUtils';
import gridConfigs from 'Utils/DiscoveryUtils/gridsConfigs';

const initialState = { hasPlayerDragged: false };

const DiscoveryDroppablesSlice = createSlice({
	name: 'DiscoveryDroppables',
	initialState,
	reducers: {
		initializeState: (state, action) => {
			let newState = { hasPlayerDragged: false };
			for (const gridConfig in gridConfigs) {
				const gridState = getDroppablesGridState(gridConfigs[gridConfig]);
				newState = { ...newState, ...gridState };
			}
			return newState;
		},
		dragEndHandler: (state, action) => {
			const newState = appliedItemDrag({ droppablesState: Object.assign({}, state), result: action.payload });
			newState.hasPlayerDragged = true;
			return newState;
		},
		clearPlayerChanges: (state, action) => {
			if (state.hasPlayerDragged) {
				return DiscoveryDroppablesSlice.caseReducers.initializeState(state, action);
			}
		},
	},
});

export const { initializeState, dragEndHandler, clearPlayerChanges } = DiscoveryDroppablesSlice.actions;
export default DiscoveryDroppablesSlice.reducer;
