import { configureStore, getDefaultMiddleware, EnhancedStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import slice from './slice';

const devMode = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: slice,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: devMode,
});

const setUpStore = (context: any): EnhancedStore => store;

const makeStore: MakeStore<any> = (context: any) => setUpStore(context);

export const wrapper = createWrapper(makeStore, {
  // debug: devMode,
});

export type AppDispatch = typeof store.dispatch;
export default wrapper;
