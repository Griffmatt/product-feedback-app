import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import suggestionsSlice from './suggestionsSlice';

import data from "../data/data.json"


const reducers = combineReducers({
    suggestions: suggestionsSlice
})

const persistConfig = {
    key: 'root',
    storage
  };

  const initialState = {
    suggestions:{
        suggestions: data.productRequests
    }
}


const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store