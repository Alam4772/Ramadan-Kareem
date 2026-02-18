import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState: any = Notification.permission;

// Create a Redux slice
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    // Handle permission change
    requestPermission: async () => {
      const result = await Notification.requestPermission();
      return result;
    },

    show: (state, action) => {
      if (state == "granted") {
        new Notification(action.payload.title, {
          body: action.payload.text,
          icon: "/icon-192x192.jpg",
        });
      }
      return state;
    },
  },
});

// Export actions
export const { requestPermission, show } = notificationSlice.actions;

// Export reducer
export default notificationSlice.reducer;
