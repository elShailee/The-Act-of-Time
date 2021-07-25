import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import MountedComponents from './Slices/MountedComponents';
import Actions from './Slices/Actions';

const reducer = combineReducers({
	MountedComponents,
	Actions,
});

const store = configureStore({ reducer });

export default store;
