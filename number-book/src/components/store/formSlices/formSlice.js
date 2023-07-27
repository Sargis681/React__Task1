import { createSlice } from "@reduxjs/toolkit";

const formSlices = createSlice({
  name: "form",
  initialState: [],
  reducers: {},
});
export const selectForm = (state) => state.form;
export const formReducer = formSlices.reducer;
export const {} = formSlices.actions;
