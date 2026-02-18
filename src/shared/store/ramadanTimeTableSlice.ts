import { createSlice } from "@reduxjs/toolkit";
import records from "./../../assets/ramadan2026.json";

// Initial state
const initialState: Array<any> = [...records];

// Create a Redux slice
const ramadanTimeTableSlice = createSlice({
  name: "timeTable",
  initialState,
  reducers: {
    list: (state) => {
      return state;
    },
  },
});

// Export actions
export const { list } = ramadanTimeTableSlice.actions;

// Export reducer
export default ramadanTimeTableSlice.reducer;
