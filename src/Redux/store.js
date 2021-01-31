import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import count from './Slices/count'
const reducer = combineReducers({
    count
})

const store = configureStore({reducer})

export default store;