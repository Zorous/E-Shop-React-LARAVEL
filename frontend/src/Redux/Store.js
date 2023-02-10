import { configureStore } from "@reduxjs/toolkit";
import { FamilleSlice } from "./Slices/FamillesSlice";

export const store = configureStore({
    reducer : {
        familles : FamilleSlice.reducer
    }
})