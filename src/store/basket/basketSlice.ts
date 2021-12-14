import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "../../components/Product/Product";

export interface BasketSlice {
  items: product[];
}

const initialState: BasketSlice = { items: [] };

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<product>) => {
      const result = [...state.items];
      result.splice(
        state.items.findIndex((item: any) => item.id === action.payload.id),
        1
      );
      state.items = [...result];
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
