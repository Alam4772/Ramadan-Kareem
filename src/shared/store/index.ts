import { configureStore } from "@reduxjs/toolkit";
import ramadanTimeTableSlice from "./ramadanTimeTableSlice";
import duaSlice from "./duaSlice";
import notificationSlice from "./notificationSlice";

export const store = configureStore({
  reducer: {
    ramadanTimeTable: ramadanTimeTableSlice,
    dua: duaSlice,
    notification: notificationSlice,
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
