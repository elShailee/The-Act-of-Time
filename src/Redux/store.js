import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import MountedComponents from './Slices/MountedComponents';
import Actions from './Slices/Actions';
import DiscoveryDroppables from './Slices/DiscoveryDroppables';

const reducer = combineReducers({
	MountedComponents,
	Actions,
	DiscoveryDroppables,
});

const store = configureStore({ reducer });

export default store;
