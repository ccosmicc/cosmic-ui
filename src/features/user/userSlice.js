import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "undefined",
    email: "undefined",
  },
  reducers: {
    update: {},
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
