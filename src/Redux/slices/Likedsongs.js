import { createSlice } from "@reduxjs/toolkit";
const LikedSongs = createSlice({
    name:"Liked",
    initialState:[],
    reducers:{
        //function logics or function are here
        addToLikedsongs:(state,action)=>{
            state.push(action.payload)
        },
    }
})
export const {  addToLikedsongs} =LikedSongs.actions
export default LikedSongs.reducer;