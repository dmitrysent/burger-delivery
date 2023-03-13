import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import axios from "axios";
import {API_URL, POSTFIX} from "../../consts";

export type Category = {
    title: string,
    rus: string,
    image: string,
}

interface IInitialState  {
    category: Category[],
    error: string,
    activeCategory: number
}

const initialState: IInitialState = {
    category: [],
    error: '',
    activeCategory: 0,
};

export const categoryRequestAsync = createAsyncThunk(
    'category/fetch',
    async (_, thunkApi) => {
        const response = await axios.get(`${API_URL}${POSTFIX}/category`)
        return response.data
    })

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action) {
            state.activeCategory = action.payload.indexCategory
        }
    },
    extraReducers: (builder) => {
        builder.addCase(categoryRequestAsync.fulfilled,
            (state, action) => {
                state.category = action.payload
            })
    }
})

export default categorySlice.reducer;
export const {changeCategory} = categorySlice.actions

export const categorySelector = (state: RootState) => state.category