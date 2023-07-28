import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    contacts: [],
  },
  reducers: {
    addForm: (state, action) => {
      state.contacts.push(action.payload);
    },
    editForm: (state, { payload }) => {
      const { id, updatedContact } = payload;
      const index = state.contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = { ...state.contacts[index], ...updatedContact };
      }
    },
    deleteList: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const selectForm = (state) => state.form;
export const formReducer = formSlice.reducer;
export const { addForm, editForm, deleteList } = formSlice.actions;
