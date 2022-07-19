import { createSlice} from '@reduxjs/toolkit';

import data from "../data/data.json"

import { suggestions, comment } from "../utilities/interfaces";

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
            state.suggestions.forEach(suggestion=>{
                if(suggestion.id === action.payload){
                    suggestion.upvotes++
                }
            })
        },
        downVote: (state, action) => {
            state.suggestions.forEach(suggestion=>{
                if(suggestion.id === action.payload){
                    suggestion.upvotes--
                }
            })
        },
        addComment: (state, action) => {
            state.suggestions.forEach(suggestion=>{
                if(suggestion.id === action.payload.feedbackId){
                    suggestion.comments = [...suggestion.comments, action.payload]
                }
            })
        },
        addReply: (state, action) => {
            state.suggestions.forEach(suggestion=>{
                suggestion.comments.forEach((comment: comment)=>{
                    if(comment.id === action.payload.commentId){
                    comment.replies = [...comment.replies, action.payload]
                    console.log(comment.replies)
                }
                })
            }
        )
        },
    }
});

export const { addSuggestion, fetchState, upVote, downVote, addComment, addReply } = suggestionsSlice.actions;

export const selectSuggestions = (state: any) => state.suggestions.suggestions;

export default suggestionsSlice.reducer;