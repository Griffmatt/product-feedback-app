import { createSlice} from '@reduxjs/toolkit';

import data from "../data/data.json"

interface State{
    user: {
        image: string,
        name: string,
        username: string,
        upvotes: number[]
    } | null
    
}

const initialState: State = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
            login: (state, action) => {
                state.user = {...data.currentUser, upvotes: action.payload}
            },
            addUpvote: (state, action) => {
                if(state.user){
                    state.user.upvotes = [...state.user.upvotes, action.payload]
                }
            },
            removeUpvote: (state, action) => {
                if(state.user){
                    state.user.upvotes = state.user.upvotes.filter((id: number)=> id !== action.payload)
                }
            },
            logout: (state) => {
                state.user = null
            }
       }
});

export const { login, logout, addUpvote, removeUpvote } = userSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;