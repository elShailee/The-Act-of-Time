import { createSlice } from '@reduxjs/toolkit';
import texts from 'texts';
import { isAnObject } from 'Utils/utilFuncs';

const initialState = {
	ActionsTab: false,
	ActionsWindow: false,
	EnergyPurchaseWindow: false,
	CoinsPurchaseWindow: false,
	CoinsTab: false,
	EnergyTab: false,
};
const MountedComponentsSlice = createSlice({
	name: 'MountedComponents',
	initialState,
	reducers: {
		mountComponents: (state, action) => {
			const componentsToMountArray = action.payload;
			const newState = mountOrUnmountComponents(Object.assign({}, state), componentsToMountArray, true);
			return newState;
		},
		unmountComponents: (state, action) => {
			const componentsToUnmountArray = action.payload;
			const newState = mountOrUnmountComponents(Object.assign({}, state), componentsToUnmountArray, false);
			return newState;
		},
	},
});

const componentsArrayValidator = arrayOfComponentsNames => {
	if (!isAnObject(arrayOfComponentsNames) || arrayOfComponentsNames === undefined) {
		return false;
	}
	return true;
};
const mountOrUnmountComponents = (mountedComponentsDict, componentsToMountArray, shouldMount) => {
	if (typeof componentsToMountArray === 'string') componentsToMountArray = [componentsToMountArray];
	const isComponentsArrayValid = componentsArrayValidator(componentsToMountArray);
	if (!isComponentsArrayValid) {
		console.log(texts.errors.invalidComponentsToMount);
		return undefined;
	}

	componentsToMountArray.forEach(componentName => {
		const doesComponentAppearInDict = componentName;
		if (doesComponentAppearInDict) {
			mountedComponentsDict[componentName] = shouldMount;
		}
	});

	return mountedComponentsDict;
};

export const { mountComponents, unmountComponents } = MountedComponentsSlice.actions;
export default MountedComponentsSlice.reducer;
