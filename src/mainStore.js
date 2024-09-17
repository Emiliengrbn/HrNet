import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "./redux/employees";

export const mainStore = configureStore({
    reducer: {
        RegisterEmployee: employeesSlice.reducer,
    }
});