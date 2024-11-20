import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { CurrentMovie } from "@/types";

export const currentMovieSlice = createSlice({
  name: "currentMovieSlice",
  initialState,
  reducers: {
    getMovieDetailsRequest: (state, _action: PayloadAction<number>) => {
      state.isLoading = true;
      state.error = "";
    },
    getMovieDetailsSuccess: (state, action: PayloadAction<CurrentMovie>) => {
      state.isLoading = false;
      state.error = "";
      state.currentMovie = action.payload;
    },
    getMovieDetailsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getMovieDetailsFailure,
  getMovieDetailsRequest,
  getMovieDetailsSuccess,
} = currentMovieSlice.actions;

export default currentMovieSlice.reducer;
