import { createSlice } from '@reduxjs/toolkit';
import { applyItemDrag, clearGridData, generateGridDataByConfig } from 'Utils/DiscoveryUtils/droppablesStateUtils';
import gridConfigs from 'Utils/DiscoveryUtils/gridsConfigs';

const initialState = { hasPlayerDragged: false };

const DiscoveryDroppablesSlice = createSlice({
	name: 'MountedComponents',
	initialState,
	reducers: {
		initializeState: (state, action) => {
			const craftingInputStateData = generateGridDataByConfig(gridConfigs.craftingInputConfig);
			const inventoryStateData = generateGridDataByConfig(gridConfigs.inventoryConfig);
			return { ...state, ...craftingInputStateData, ...inventoryStateData };
		},
		DragEndHandler: (state, action) => {
			const newState = applyItemDrag({ droppablesState: Object.assign({}, state), result: action.payload });
			newState.hasPlayerDragged = true;
			return newState;
		},
		clearPlayerChanges: (state, action) => {
			if (state.hasPlayerDragged) {
				let newState = { ...state };
				newState = clearGridData({ gridConfig: gridConfigs.craftingInputConfig, droppablesState: newState });
				newState = clearGridData({ gridConfig: gridConfigs.craftingOutputConfig, droppablesState: newState });
				newState.hasPlayerDragged = false;
				return newState;
			}
		},
	},
});

export const { initializeState, DragEndHandler, clearPlayerChanges } = DiscoveryDroppablesSlice.actions;
export default DiscoveryDroppablesSlice.reducer;
