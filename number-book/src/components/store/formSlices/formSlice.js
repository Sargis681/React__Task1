import { createSlice} from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    contacts: [],
    formEdit: null,
    // favoriteContacts: [],
    favorite:false,
    search:""
  },
  reducers: {
    addForm: (state, { payload }) => {
      state.contacts.push(payload);
    },
    editForm: (state, { payload }) => {
      state.formEdit = state.contacts.find((contact) => contact.id === payload);
    },
    saveEditedForm: (state, { payload }) => {
      const index = state.contacts.findIndex((contact) => contact.id === payload.id);
      if (index !== -1) {
        state.contacts[index] = payload;
        state.formEdit = null;
      }
    },
    deleteList: (state, { payload }) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== payload);
      state.favoriteContacts = state.favoriteContacts.filter(
        (connect) => connect.id !== payload
      );

      if (state.formEdit && state.formEdit.id === payload) {
        state.formEdit = null;
      }
    },
    favoriteFunction: (state, { payload }) => {
      const contactIndex = state.contacts.findIndex((contact) => contact.id === payload);

      if (contactIndex !== -1) {
        const contact = state.contacts[contactIndex];
        contact.favorite = !contact.favorite;

        if (contact.favorite === true) {
          state.favoriteContacts.push(contact);
        } else {
          const favoriteIndex = state.favoriteContacts.findIndex(
            (favoriteContact) => favoriteContact.id === payload
          );
          if (favoriteIndex !== -1) {
            state.favoriteContacts.splice(favoriteIndex, 1);
          }
        }
      }
    },
  favoriteSort:(state,{payload})=>{
    state.favorite =!state.favorite
    console.log(state.favorite);
  },
  searchContent: (state, { payload }) => {
    // const filteredContacts = state.contacts.filter((contact) =>
    //   contact.name.toLowerCase().includes(payload.toLowerCase())
    // );

    // return {
    //   ...state,
    //   contacts: filteredContacts,
    //   search: payload, 
    // };
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
  searchContent
} = formSlice.actions;
