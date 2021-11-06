import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/users/UserSlice';
export default configureStore({
  reducer: { counter: counterReducer, users: userReducer },
});
