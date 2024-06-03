import { createSlice } from "@reduxjs/toolkit";

const Payments = createSlice({
    name:"Payment",
    initialState:[],
    reducers:{
        //function logics or function are here
        addToPayments:(state,action)=>{
            state.push(action.payload)
        },
        removeFromPayments:(state,action)=>{
            return state.filter(item=>item.rupee != action.payload)
        },
    }
})
export const { addToPayments,removeFromPayments} = Payments.actions
export default Payments.reducer;