import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import { suggestions } from "../utilities/interfaces";

interface stateSuggestions{
    suggestions: state
}
interface state{
    suggestions: suggestions[],
    loading: string | null
}

const initialState: state = {
    suggestions: [],
    loading: null
}

export const fetchSuggestions = createAsyncThunk(
    "suggestions/fetchSuggestions",
    async (_thunkAPI) => {
        const response = await axios.get("/data.json")
        return response.data.productRequests
    }
) as any



const suggestionsSlice = createSlice({
    name: "suggestions",
    initialState,
    reducers: {
        addSuggestion: (state, action) =>{
            state.suggestions = [...state.suggestions, action.payload]
        },
        upVote: (state, action) => {
            const suggestion = state.suggestions.find(suggestion => suggestion.id ===action.payload)
                
            if(suggestion) suggestion.upvotes++

        },
        downVote: (state, action) => {
            const suggestion = state.suggestions.find(suggestion => suggestion.id ===action.payload)
                
            if(suggestion) suggestion.upvotes--
        },
        addComment: (state, action) => {
            const suggestion = state.suggestions.find(suggestion => suggestion.id ===action.payload.feedbackId)

            if(suggestion)suggestion.comments = [...suggestion.comments, action.payload]
        },
        deleteComment: (state, action) => {
            const suggestion = state.suggestions.find(suggestion => suggestion.id ===action.payload.feedbackId)
            if(suggestion) suggestion.comments = suggestion.comments.filter(comment=> comment.id !== action.payload.id)
        },
        addReply: (state, action) => {
            state.suggestions.forEach(suggestion=>{
                const comment = suggestion.comments.find(comment => comment.id ===action.payload.commentId)
                
                if(comment)comment.replies = [...comment.replies, action.payload]
            })
        },
        deleteReply: (state, action) => {
            state.suggestions.forEach(suggestion=>{
                const comment = suggestion.comments.find(comment => comment.id ===action.payload.commentId)
                
                if(comment) comment.replies = comment.replies.filter(reply => reply.id !== action.payload.id)

            })
        },
        addFeedback: (state, action) => {
            console.log(action.payload)
            state.suggestions = [...state.suggestions, action.payload]
        },
        updateFeedback: (state, action) => {
            const index = state.suggestions.findIndex(suggestion => action.payload.id.toString() === suggestion.id.toString())
            state.suggestions[index] = {...state.suggestions[index], ...action.payload}  
        },
        deleteFeedback: (state, action) => {
            state.suggestions = state.suggestions.filter(suggestion=> suggestion.id !== action.payload)
        },
    },
    extraReducers:{
        [fetchSuggestions.pending]: (state: state)=>{
            state.loading = "pending"
            console.log(state.loading)
        },
        [fetchSuggestions.fulfilled]: (state: state, action: any)=>{
            state.loading = "fulfilled"
            state.suggestions = [...action.payload]
        },
        [fetchSuggestions.rejected]: (state: state)=>{
            state.loading = "rejected"
        }
    },
});

export const { addSuggestion, upVote, downVote, addComment, addReply, deleteComment, deleteReply, addFeedback, updateFeedback, deleteFeedback } = suggestionsSlice.actions;

export const selectSuggestions = (state: stateSuggestions) => state.suggestions.suggestions;

export default suggestionsSlice.reducer;