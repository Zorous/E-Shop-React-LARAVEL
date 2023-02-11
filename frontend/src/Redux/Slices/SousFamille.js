import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getSousfamille = createAsyncThunk("Sousfamille/getSousfamille", async(_,thunkAPI)=>{
    try{
        const res = await fetch('http://127.0.0.1:8000/api/sousfamilles')
        const data = await res.json()
        return data
}
catch(error){console.log(error)}
})


//Adding a new Sousfamille
// export const insertSousfamille = createAsyncThunk("Sousfamille/insertSousfamille", async (data, thunkAPI) => {

//     const { rejectWithValue } = thunkAPI

//     try {
//         const res = await fetch('http://localhost:4000/products', {
//             method: "POST",
//             body: JSON.stringify(data),
//             header: {
//                 'Content-type': "application/json; charset=UTF-8"
//             }

//         });
//         const data = await res.json()
//         return data
//     }
//     catch (error) {
//         return rejectWithValue(error.message)
//     }
// })


export const SousfamilleSlice = createSlice({
    name : "Sousfamilles",
    initialState:{
        "sousfamilles": [],
        loading:false,
        "error":null
    },
    reducers:{
        AddSousfamille : () =>{},
        DeleteSousfamille : () =>{},
        UpdateSousfamille : () =>{},
    },
    "extraReducers":{
         [getSousfamille.pending]: (state, { meta })=>{
            state.loading = "pending";
          }, 
         [getSousfamille.fulfilled]: (state, action)=> {  
            // state.Sousfamilles = action.payload;
            state.loading = false
            state.Sousfamilles  = action.payload
            console.log(action)
           },
          [getSousfamille.rejected]: (state,{meta,payload,error })=>{
            state.error = error;
          }
    }
})







export default SousfamilleSlice.reducer;
