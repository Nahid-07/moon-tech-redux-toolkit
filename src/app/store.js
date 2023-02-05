import {configureStore } from "@reduxjs/toolkit"
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filters/filterSlice";
import logger from "redux-logger"


const store = configureStore({
    reducer :{
        cart : cartSlice,
        filter : filterSlice
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;