import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "@/redux/slices/movieSlice/movieSlice";
import currentMovieReducer from "@/redux/slices/currentMovieSlice/currentMovieSlice";

const rootReducer = combineReducers({
  movieSlice: movieReducer,
  currentMovieSlice: currentMovieReducer,
});

export default rootReducer;
