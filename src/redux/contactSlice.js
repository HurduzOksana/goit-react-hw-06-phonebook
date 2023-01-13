import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',

  initialState: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],

  reducers: {
    addContact: (state, action) => {
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      state.push(contact);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(
        contact => contact.id === action.payload.id
      );
      state[index].completed = action.payload.completed;
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, toggleComplete, deleteContact } =
  contactSlice.actions;

export default contactSlice.reducer;
