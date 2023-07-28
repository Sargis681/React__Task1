// formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    contacts: [],
    formEdit: null,
  },
  reducers: {
    addForm: (state, { payload }) => {
      state.contacts.push(payload);
    },
    editForm: (state, { payload }) => {
      state.formEdit = state.contacts.find((contact) => contact.id === payload);
    },
    saveEditedForm: (state, { payload }) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === payload.id
      );
      if (index !== -1) {
        state.contacts[index] = payload;
        state.formEdit = null;
      }
    },
    deleteList: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
      if (state.formEdit && state.formEdit.id === payload) {
        state.formEdit = null;
      }
    },
  },
});

export const selectForm = (state) => state.form;
export const formReducer = formSlice.reducer;
export const { addForm, deleteList, editForm, saveEditedForm } =
  formSlice.actions;
