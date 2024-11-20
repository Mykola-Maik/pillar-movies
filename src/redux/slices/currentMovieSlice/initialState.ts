import { CurrentMovieState } from "@/types";

export const initialState: CurrentMovieState = {
  currentMovie: null,
  isLoading: false,
  error: "",
};
