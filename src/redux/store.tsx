import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import suggestionsSlice from './suggestionsSlice';
import userSlice from './userSlice';

const reducers = combineReducers({
    suggestions: suggestionsSlice,
    user: userSlice
})


const store = configureStore({
    reducer: reducers,
    middleware: [thunk]
})

export default store