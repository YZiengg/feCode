import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slides/counterSlide.js'; // Sử dụng import default
import userReducer from './slides/userSlide.js'; // Sử dụng import default

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    user: userReducer
  },
});
