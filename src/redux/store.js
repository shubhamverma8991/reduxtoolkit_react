import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { userSlice } from "../features/user/userSlice";
import { todoSlice } from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
    todo: todoSlice.reducer,
  },
});
