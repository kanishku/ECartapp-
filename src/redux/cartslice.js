import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cartslice",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromcart:(state,action)=>{
            return  state.filter(item=>item.id!==action.payload)
         },
         emptycart:(state)=>{
            return state=[]
         }
    }
})

export const {addToCart, removeFromcart, emptycart}=cartslice.actions
export default cartslice.reducer