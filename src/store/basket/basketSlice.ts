import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BasketSlice {
  items:any
}

interface item{

}

const initialState: BasketSlice = { items: [] };

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        addToBasket:(state,action:PayloadAction<any>)=>{
            state.items=[...state.items,action.payload];
        },
        removeFromBasket:(state,action:PayloadAction<any>)=>{
            state.items=state.items.filter(action.payload)
        }
    }
})

export const {addToBasket,removeFromBasket}= basketSlice.actions;

export default basketSlice.reducer;