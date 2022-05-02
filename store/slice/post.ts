import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../interface/post';

const initialState: IPost = {
  content: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    savePost(state, action: PayloadAction<'content'>) {
      state.content = action.payload;
    },
  },
});

export default postSlice.reducer;
export const { savePost } = postSlice.actions;
