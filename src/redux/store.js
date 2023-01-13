import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

//Store holds state and combines reducers
export default configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
