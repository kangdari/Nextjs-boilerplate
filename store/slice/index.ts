import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import users from './users';
import post from './post';
import globalModal, { GlobalModalType } from './globalModal';
import { IUser } from '../interface/user';
import { IPost } from '../interface/post';

export interface State {
  users: IUser;
  post: IPost;
  globalModal: GlobalModalType;
}

const combineReducer = combineReducers({
  users,
  post,
  globalModal,
});

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof combineReducer>;

// useSelector의 기본 상태 타입을 DefaultRootState로 설정
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
