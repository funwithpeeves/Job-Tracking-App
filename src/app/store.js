import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../app/slices/jobSlice"

export default configureStore({
    reducer: { jobReducer },
})