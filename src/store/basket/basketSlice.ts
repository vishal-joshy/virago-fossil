import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BasketSlice {
  items: any;
}

interface item {}

const initialState: BasketSlice = { items: [] };

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<any>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<any>) => {
      const result = [...state.items];
      result.splice(state.items.findIndex((item: any) => item.id === action.payload.id), 1);
      state.items = [...result];
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
