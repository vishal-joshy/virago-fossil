import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserSlice {
  username: null | string;
}

const initialState: UserSlice = { username: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<null | string>) => {
      state.username = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
