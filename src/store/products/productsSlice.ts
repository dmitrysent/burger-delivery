import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL, POSTFIX} from "../../consts";
import {RootState} from "../store";


export type Products = {
    id:          string;
    title:       string;
    price:       number;
    weight:      number;
    calories:    number;
    description: string;
    ingredients: string[];
    category:    string;
    image:       string;
}

interface IProduct {
    products: Products[],
    error: string
}

const initialState: IProduct = {
    products: [],
    error: '',
}

export const productsRequestAsync = createAsyncThunk(
    'product/fetch',
    async (category: string, thunkApi) => {
        const response = await axios.get(`${API_URL}${POSTFIX}/?category=${category}`)
        return response.data
    });

const productsSlice = createSlice({
    reducers: {},
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(productsRequestAsync.pending, state => {
                state.error = ''
            })
            .addCase(productsRequestAsync.fulfilled, (state, action) => {
                state.error = ''
                state.products = action.payload
            })
            .addCase(productsRequestAsync.rejected, state => {
                state.error = 'Error request'
            })
    }
})
export default productsSlice.reducer;

export const productsSelector = (state: RootState) => state.products
