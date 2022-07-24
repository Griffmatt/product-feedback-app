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
        deleteComment: (state, action) => {
            state.suggestions.forEach(suggestion=>{
                suggestion.comments = suggestion.comments.filter(comment=> comment.id !== action.payload)
            })
        },
        addReply: (state, action) => {
            state.suggestions.forEach(suggestion=>{
                suggestion.comments.forEach((comment: comment)=>{
                    if(comment.id === action.payload.commentId){
                    comment.replies = [...comment.replies, action.payload]
                }
                })
            }
        )
        },
        deleteReply: (state, action) => {
            state.suggestions.forEach(suggestion=>{
                suggestion.comments.forEach((comment: comment)=>{
                    if(comment.id === action.payload.commentId){
                        comment.replies = comment.replies.filter(reply => reply.id !== action.payload.id)
                    }
                })
            }
        )
        },
        addFeedback: (state, action) => {
            state.suggestions = [...state.suggestions, action.payload]
        },
        updateFeedback: (state, action) => {
            state.suggestions.forEach((suggestion, index)=>{
                if(suggestion.id.toString() === action.payload.id.toString()){
                     state.suggestions[index] = {...suggestion, ...action.payload}
                }
            })
        },
        deleteFeedback: (state, action) => {
            console.log(action.payload)
            state.suggestions = state.suggestions.filter(suggestion=> suggestion.id.toString() !== action.payload)
        },
}});

export const { addSuggestion, fetchState, upVote, downVote, addComment, addReply, deleteComment, deleteReply, addFeedback, updateFeedback, deleteFeedback } = suggestionsSlice.actions;

export const selectSuggestions = (state: stateSuggestions) => state.suggestions.suggestions;

export default suggestionsSlice.reducer;