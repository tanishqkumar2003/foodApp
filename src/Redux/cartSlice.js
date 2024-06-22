import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        // Redex  uses Immer library to work on states
        addItems:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;
        },
    },
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;