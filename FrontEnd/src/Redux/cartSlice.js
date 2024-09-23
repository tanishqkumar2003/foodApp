import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        // Redux  uses Immer library to work on states
        addItems:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            const id = action.payload
            state.items = state.items.filter((item)=>item.id !== id);
        },
        clearCart:(state)=>{
            state.items.length = 0;
        },
    },
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;