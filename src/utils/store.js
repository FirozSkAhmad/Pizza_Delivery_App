import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import dataSlice from "./dataSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice,
        data: dataSlice
    }
})

export default store