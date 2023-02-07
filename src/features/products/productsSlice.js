import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct, fetchProducts, postProduct } from "./productsApi";

const initialState = {
  products: [],
  isLoading: false,
  postSuccess: false,
  deleteSuccess: false,
  isError: false,
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const products = fetchProducts();
    return products;
  }
);
export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (data) => {
    const products = postProduct(data);
    return products;
  }
);
export const removeProducts = createAsyncThunk(
  "products/removeProducts",
  async (id) => {
    const deletedProduct = deleteProduct(id);
    return deletedProduct;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    togglePostSuccess: (state) => {
      state.postSuccess = false;
    },
    toggledeleteSuccess: (state) => {
      state.deleteSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(addProducts.pending, (state) => {
        state.isLoading = true;
        state.postSuccess = false;
        state.isError = false;
      })
      .addCase(addProducts.fulfilled, (state) => {
        state.postSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.postSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(removeProducts.pending, (state) => {
        state.isLoading = true;
        state.deleteSuccess = false;
        state.isError = false;
      })
      .addCase(removeProducts.fulfilled, (state) => {
        state.deleteSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(removeProducts.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.deleteSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { togglePostSuccess } = productsSlice.actions;
export default productsSlice.reducer;
