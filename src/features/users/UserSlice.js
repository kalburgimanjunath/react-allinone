import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    name: '',
  },
  reducers: {
    add: (state, newValue) => {
      // console.log(newValue);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name.push(newValue);
    },
    delete: (state) => {
      state.name = state.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = userSlice.actions;

export default userSlice.reducer;
