import {createSlice} from "@reduxjs/toolkit";
import {IShow} from "../../types.ts";
import {fetchShows} from "../thunks/showThunk.ts";

interface showSliceState {
    show: IShow[]
    isLoading: boolean
    isError: boolean
}

const initialState: showSliceState = {
    show: [],
    isLoading: false,
    isError: false,
}

const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchShows.pending, (state) => {
                    state.isLoading = true;
                    state.isError = false
                })
            .addCase(
                fetchShows.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.show = action.payload
                })
            .addCase(
                fetchShows.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                }
            )
    }
})

export const showReducer = showsSlice.reducer;

export const {} = showsSlice.actions;