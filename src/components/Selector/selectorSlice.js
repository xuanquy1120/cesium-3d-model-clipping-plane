import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "idEntity",
  initialState: {
    id: "1186785",
  },
  reducers: {
    chooseEntity: (state, action) => {
      state.id = action.payload;
    },
  },
});
