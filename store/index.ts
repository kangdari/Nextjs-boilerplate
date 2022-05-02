import { configureStore, getDefaultMiddleware, EnhancedStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import slice from './slice';

const devMode = process.env.NODE_ENV === 'development';
// console.log(process.env.BUILD_ENV); // node 환경에서만 접근 가능
// console.log(process.env.NEXT_PUBLIC_BUILD_ENV); // 브라우저에서 접근

const store = configureStore({
  reducer: slice,
  middleware: [...getDefaultMiddleware()],
  // devTools: devMode,
});

const setUpStore = (context: any): EnhancedStore => store;

const makeStore: MakeStore<any> = (context: any) => setUpStore(context);

export const wrapper = createWrapper(makeStore, {
  // debug: devMode,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default wrapper;
