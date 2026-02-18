import { createSlice } from "@reduxjs/toolkit";
import records from "../../assets/dua.json";

// Initial state
const initialState: any = {
  categories: [...new Set(records.map((record) => record.category))],
  duaList: (category: string) => {
    return records.filter((record) => record.category === category);
  },
};

// Create a Redux slice
const duaSlice = createSlice({
  name: "dua",
  initialState,
  reducers: {},
});

// Export actions
export const {} = duaSlice.actions;

// Export reducer
export default duaSlice.reducer;
