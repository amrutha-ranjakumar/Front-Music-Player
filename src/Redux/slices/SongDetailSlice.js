import { createSlice } from "@reduxjs/toolkit";

const songDetailSlice = createSlice({
    name:"Recentely",
    initialState:[],
    reducers:{
        //function logics or function are here
        addTosongDetail:(state,action)=>{
            state.push(action.payload)
        },
    }
})
export const {addTosongDetail} = songDetailSlice.actions
export default songDetailSlice.reducer;