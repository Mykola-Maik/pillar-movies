import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "@/redux/slices/movieSlice/movieSlice";

const rootReducer = combineReducers({
  movieSlice: movieReducer,
});

export default rootReducer;
