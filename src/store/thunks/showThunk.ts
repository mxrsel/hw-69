import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {IShow} from "../../types.ts";

export const fetchShows = createAsyncThunk<IShow[], string>('shows/fetchShows', async(id) => {
    const response = await axiosApi.get(`/search/shows?q=${id}`);
    return response.data;
})