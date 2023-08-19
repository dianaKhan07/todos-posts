import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchPostData = createAsyncThunk('post/fetchData', async () => {
    const data = await axios.get('https://dummyjson.com/posts');
    return data.data.posts;
})