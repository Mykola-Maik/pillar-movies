import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { Movie, ServerResponse } from "@/types";
import { Filters } from "@/enums";

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    getMoviesRequest: (
      state,
      _action: PayloadAction<{ page: number; query?: Filters }>
    ) => {
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
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;

      if (!state.favorites.find((fav) => fav.id === movie.id)) {
        state.favorites.push(movie);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      const movieId = action.payload;

      state.favorites = state.favorites.filter((fav) => fav.id !== movieId);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    clearFavorites: (state) => {
      state.favorites = [];
      localStorage.removeItem("favorites");
    },
  },
});

export const {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesFailure,
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
} = movieSlice.actions;

export default movieSlice.reducer;
