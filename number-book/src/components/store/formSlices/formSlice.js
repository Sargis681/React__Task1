import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],

  formEdit: null,
  favorite: false,
  search: "",
  user: "",
  currentPage: 1,
};

const formSlice = createSlice({
  name: "form",
  initialState,
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
    favoriteFunction: (state, { payload }) => {
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === payload
      );

      if (contactIndex !== -1) {
        const contact = state.contacts[contactIndex];
        contact.favorite = !contact.favorite;
      }
    },

    favoriteSort: (state) => {
      state.favorite = !state.favorite;
    },
    searchContacts: (state, { payload }) => {
      state.search = payload;
    },
    loginAdd: (state, { payload }) => {
      state.user = payload;
      console.log(payload);
    },
  },
});

export const selectForm = (state) => state.form;
export const formReducer = formSlice.reducer;
export const {
  addForm,
  deleteList,
  editForm,
  saveEditedForm,
  favoriteFunction,
  favoriteSort,
  searchContacts,
  searchFilter,
  loginAdd,
} = formSlice.actions;
