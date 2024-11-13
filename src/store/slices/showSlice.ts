import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IShow} from "../../types.ts";
import {fetchDetails, fetchShows} from "../thunks/showThunk.ts";

interface showSliceState {
    show: IShow[]
    Details: IShow | null
    isLoading: boolean
    isError: boolean
}

const initialState: showSliceState = {
    show: [],
    Details: null,
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
                })
            .addCase(fetchDetails.pending, (state) => {
                state.isLoading = true;
                state.isError = false
            })
            .addCase(fetchDetails.fulfilled, (state, action: PayloadAction<IShow>) => {
                state.isLoading = false;
                state.Details = action.payload;
            })
            .addCase(fetchDetails.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
})

export const showReducer = showsSlice.reducer;
