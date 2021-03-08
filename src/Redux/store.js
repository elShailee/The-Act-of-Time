import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import MountedComponents from './Slices/MountedComponents';

const reducer = combineReducers({
	MountedComponents,
});

const store = configureStore({ reducer });

export default store;
