import { createSlice } from '@reduxjs/toolkit';
import { applyItemDrag, generateGridDataByConfig } from 'Utils/DiscoveryUtils/droppablesStateUtils';
import gridConfigs from 'Utils/DiscoveryUtils/gridsConfigs';

const initialState = { hasPlayerDragged: false };

const DiscoveryDroppablesSlice = createSlice({
	name: 'DiscoveryDroppables',
	initialState,
	reducers: {
		initializeState: (state, action) => {
			const craftingInputStateData = generateGridDataByConfig(gridConfigs.craftingInputConfig);
			const inventoryStateData = generateGridDataByConfig(gridConfigs.inventoryConfig);
			return { hasPlayerDragged: false, ...craftingInputStateData, ...inventoryStateData };
		},
		dragEndHandler: (state, action) => {
			const newState = applyItemDrag({ droppablesState: Object.assign({}, state), result: action.payload });
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
