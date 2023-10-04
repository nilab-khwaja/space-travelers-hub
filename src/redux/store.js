import { configureStore } from '@reduxjs/toolkit';
import rocketReduser from './rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReduser,
  },
});

export default store;
