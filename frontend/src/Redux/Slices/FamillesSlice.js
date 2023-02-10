import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getFamille = createAsyncThunk("famille/getFamille", async(_,thunkAPI)=>{
    try{
    const response = await axios.get("http://127.0.0.1:8000/api/familles");
    return response.data;
}
catch(error){console.log(error)}
})




//Adding a new Famille
// export const insertFamille = createAsyncThunk("famille/insertFamille", async (data, thunkAPI) => {

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












export const FamilleSlice = createSlice({
    name : "familles",
    initialState:{
        "familles": [],
        loading:false,
        "error":null
    },
    reducers:{
        AddFamille : () =>{},
        DeleteFamille : () =>{},
        UpdateFamille : () =>{},
    },
    "extraReducers":{
        [getFamille.fulfilled]: (state, { meta, payload })=> {  
            state.familes = payload;
           },
          [getFamille.pending]: (state, { meta })=>{
            state.loading = "pending";
          },
          [getFamille.rejected]: (state,{meta,payload,error })=>{
            state.error = error;
          }
    }
})







export default FamilleSlice.reducer;
