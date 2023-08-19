import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../types";
import { fetchPostData } from "./api";




interface IPostSlice {
    list: IPost[];
    loading: boolean;
    errorMessage: string
}


const initState: IPostSlice = {
    list: [],
    loading: false,
    errorMessage: ""
}

export const postSlice = createSlice ({
    name: 'posts',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostData.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(fetchPostData.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false
        }),
        builder.addCase(fetchPostData.rejected, (state, action) => {
            state.errorMessage = action.payload as string;
            state.loading = false
        });
    },
})

