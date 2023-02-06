import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchProducts from "./productsApi";

const initialState ={
    products : [],
    isLoading : false,
    isError : false,
    error : ""
}

export const getProducts = createAsyncThunk("products/getProducts", async ()=>{
    const product = fetchProducts();
    return product;
});
const productsSlice = createSlice({
    name : "products",
    initialState,
    extraReducers :(builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
            state.isError = false;
        }).addCase(getProducts.rejected, (state, action) => {
            state.products = []
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message
        });
    }
});

export default productsSlice.reducer;