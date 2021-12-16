import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: { basket: basketReducer, user: userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
