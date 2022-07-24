import { createSlice} from '@reduxjs/toolkit';

import data from "../data/data.json"

import { suggestions, comment } from "../utilities/interfaces";

interface stateSuggestions{
    suggestions: state
}
interface state{
    suggestions: suggestions[]
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
            state.suggestions = [...state.suggestions, action.payload]
        },
        updateFeedback: (state, action) => {
            const index = state.suggestions.findIndex(suggestion => action.payload.id.toString() === suggestion.id.toString())
            state.suggestions[index] = {...state.suggestions[index], ...action.payload}  
        },
        deleteFeedback: (state, action) => {
            state.suggestions = state.suggestions.filter(suggestion=> suggestion.id.toString() !== action.payload)
        },
}});

export const { addSuggestion, fetchState, upVote, downVote, addComment, addReply, deleteComment, deleteReply, addFeedback, updateFeedback, deleteFeedback } = suggestionsSlice.actions;

export const selectSuggestions = (state: stateSuggestions) => state.suggestions.suggestions;

export default suggestionsSlice.reducer;