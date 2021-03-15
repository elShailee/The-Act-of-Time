import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import MountedComponents from './Slices/MountedComponents';
import ActionsSlice from './Slices/Actions';

const reducer = combineReducers({
	MountedComponents,
	Actions: ActionsSlice,
});

const store = configureStore({ reducer });

export default store;
