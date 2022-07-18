import { createSlice} from '@reduxjs/toolkit';

import data from "../data/data.json"

interface State{
    user: {
        image: string,
        name: string,
        username: string,
        upvotes: number[]
    }
    
}

const initialState: State = {
    user:{
        image: "",
        name: "",
        username: "",
        upvotes: []
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
            setUser: (state, action) => {
                state.user = {...data.currentUser, upvotes: action.payload}
            },
            addUpvote: (state, action) => {
                state.user.upvotes = [...state.user.upvotes, action.payload]
            },
            removeUpvote: (state, action) => {
                state.user.upvotes = state.user.upvotes.filter((id: number)=> id !== action.payload)
            }
       }
});

export const { setUser, addUpvote, removeUpvote } = userSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;