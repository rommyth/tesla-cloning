import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../components/carSlice"

export const store = configureStore({
    reducer: {
        car: carReducer,
    },
});