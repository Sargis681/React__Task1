import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: [],
  reducers: {
    addForm(state, { payload }) {
      const { name, surname, email, number, img, status } = payload;

      const id = new Date().getTime().toString();

      return [
        ...state,
        {
          name: name,
          surname: surname,
          email: email,
          number: number,
          img: img,
          status: status,
          id: id,
        },
      ];
    },
  },
});

export const selectForm = (state) => state.form;
export const formReducer = formSlice.reducer;
export const { addForm } = formSlice.actions;
