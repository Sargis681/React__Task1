import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    // ... existing contact objects ...
  ],
  filteredContacts: [],
  formEdit: null,
  favorite: false,
  search: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm: (state, { payload }) => {
      state.contacts.push(payload);
      state.filteredContacts.push(payload);
    },
    editForm: (state, { payload }) => {
      state.formEdit = state.filteredContacts.find(
        (contact) => contact.id === payload
      );
    },
    saveEditedForm: (state, { payload }) => {
      const index = state.filteredContacts.findIndex(
        (contact) => contact.id === payload.id
      );
      if (index !== -1) {
        state.filteredContacts[index] = payload;
        state.formEdit = null;
      }
    },
    deleteList: (state, { payload }) => {
      state.filteredContacts = state.filteredContacts.filter(
        (contact) => contact.id !== payload
      );

      if (state.formEdit && state.formEdit.id === payload) {
        state.formEdit = null;
      }
    },
    favoriteFunction: (state, { payload }) => {
      const contactIndex = state.filteredContacts.findIndex(
        (contact) => contact.id === payload
      );

      if (contactIndex !== -1) {
        const contact = state.filteredContacts[contactIndex];
        contact.favorite = !contact.favorite;
      }
    },
    favoriteSort: (state) => {
      state.favorite = !state.favorite;
      console.log(state.favorite);
    },
    searchContacts: (state, { payload }) => {
      state.search = payload;
      console.log(state.search);
    },
    searchFilter(state, { payload }) {
      state.filteredContacts = state.contacts;

      if (state.search !== "") {
        state.filteredContacts = state.contacts.filter(
          (cont) =>
            cont.name.toLowerCase().includes(state.search.toLowerCase()) ||
            cont.email.toLowerCase().includes(state.search.toLowerCase())
        );
      }

      // After filtering, update the favorite state for the filtered contacts
      state.filteredContacts.forEach((contact) => {
        const originalContact = state.contacts.find(
          (cont) => cont.id === contact.id
        );
        contact.favorite = originalContact.favorite;
      });
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
} = formSlice.actions;
