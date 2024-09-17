import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "Employees",
  initialState: [].map((item, index) => ({ ...item, id: index + 1 })), 
  reducers: {
    registerEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { registerEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;