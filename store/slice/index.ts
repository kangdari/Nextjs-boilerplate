import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import users from './users';
import post from './post';
import { IUser } from '../interface/user';
import { IPost } from '../interface/post';

export interface State {
  users: IUser;
  post: IPost;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE');
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        users,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
