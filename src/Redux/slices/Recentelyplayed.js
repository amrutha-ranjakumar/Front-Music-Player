import { createSlice } from "@reduxjs/toolkit";

const Recentlyplayed = createSlice({
    name:"Recentely",
    initialState:[],
    reducers:{
        //function logics or function are here
        addToRecentlyplayed:(state,action)=>{
            state.push(action.payload)
        },
    }
})
export const {addToRecentlyplayed} = Recentlyplayed.actions
export default Recentlyplayed.reducer;