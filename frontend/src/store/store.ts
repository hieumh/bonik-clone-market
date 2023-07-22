import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice/app.slice';

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
