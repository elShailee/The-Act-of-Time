import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import MountedComponents from './Slices/MountedComponents';
import Actions from './Slices/Actions';
import Discovery from './Slices/Discovery';

const reducer = combineReducers({
	MountedComponents,
	Actions,
	Discovery,
});

const store = configureStore({ reducer });

export default store;
