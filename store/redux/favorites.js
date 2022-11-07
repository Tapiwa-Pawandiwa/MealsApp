//we create a slice - for defining some state, data , and actions that manipulate data 

import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name:'favorites',
    initialState:{
        ids:[],
    },
    reducers: {
        addFavorite: (state,action)=> {
            state.ids.push(action.payload.id);//update state Id ARRAY
        },
        removeFavorite: (state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1);
        },
    }
    //WE DISPATCH THESE METHODS
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;