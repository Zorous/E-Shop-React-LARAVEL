import { configureStore } from "@reduxjs/toolkit";
import { FamilleSlice } from "./Slices/FamillesSlice";
import { SousfamilleSlice } from "./Slices/SousFamille";

export const store = configureStore({
    reducer : {
        familles : FamilleSlice.reducer,
        sousfamilles: SousfamilleSlice.reducer
    }
})