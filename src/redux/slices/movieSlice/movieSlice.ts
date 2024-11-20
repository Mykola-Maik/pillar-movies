import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { ServerResponse } from "@/types";

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    getMoviesRequest: (state, _action: PayloadAction<{ page: number }>) => {
      state.isLoading = true;
      state.error = "";
    },
    getMoviesSuccess: (state, action: PayloadAction<ServerResponse>) => {
      state.isLoading = false;
      state.error = "";
      state.totalPages = action.payload.total_pages;
      state.totalMovies = action.payload.total_results;
      state.movies = action.payload.results;
    },
    getMoviesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getMoviesRequest, getMoviesSuccess, getMoviesFailure } =
  movieSlice.actions;

export default movieSlice.reducer;
