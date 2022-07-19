import { createSlice} from '@reduxjs/toolkit';
import { Action } from 'history';

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
            setUser: (state, action) => {
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
            }
       }
});

export const { setUser, addUpvote, removeUpvote } = userSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;