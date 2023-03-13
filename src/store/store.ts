import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productsReducer from "./products/productsSlice";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        products: productsReducer,

    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
