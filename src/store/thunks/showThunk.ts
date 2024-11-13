import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {IApiShow, IShow} from "../../types.ts";

export const fetchShows = createAsyncThunk<IShow[], string>("show/fetchShows", async (userMsg: string) => {
    const response = await axiosApi.get<IApiShow[]>(`/search/shows?q=${userMsg}`);
    console.log('api response', response.data);
    return response.data.map((item) => ({
        id: item.show.id,
        name: item.show.name,
        image: item.show.image?.medium || '',
        summary: item.show.summary,
    }));
});

export const fetchDetails = createAsyncThunk("show/fetchShowDetails", async (id: number) => {
    const response = await axiosApi.get(`/shows/${id}`);
    return {
        id: response.data.id,
        name: response.data.name,
        image: response.data.image?.medium || '',
        summary: response.data.summary,
    };
});
