import { createSlice} from '@reduxjs/toolkit';

import data from "../data/data.json"

interface state{
    suggestions: any[]
}

let initialState: state = {
    suggestions: []
}

export const suggestionsSlice = createSlice({
    name: "suggestions",
    initialState,
    reducers: {
        fetchState: (state) => {
           state.suggestions = data.productRequests
        },
        addSuggestion: (state, action) =>{
            state.suggestions = [...state.suggestions, action.payload]
        }
       }
});

export const { addSuggestion, fetchState } = suggestionsSlice.actions;

export const selectSuggestions = (state: any) => state.suggestions.suggestions;

export default suggestionsSlice.reducer;