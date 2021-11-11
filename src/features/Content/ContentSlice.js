import { createSlice } from '@reduxjs/toolkit';
const ContentSlice = createSlice({
  name: 'content',
  initialState: [
    {
      id: 1,
      title: 'story title',
      subheading: 'subheading',
      content: 'lorem text',
    },
  ],
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.concat(action);
      // state.id += 1;
    },
  },
});
export const { add } = ContentSlice.actions;
export default ContentSlice.reducer;
