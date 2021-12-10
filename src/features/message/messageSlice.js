import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    user: {
      name: "john",
      image: null,
    },
    id: null,
  },
  reducers: {},
});

export default messageSlice.reducer;
