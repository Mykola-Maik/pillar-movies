import { MovieSliceState } from "@/types";

export const initialState: MovieSliceState = {
  totalMovies: 0,
  totalPages: 1,
  movies: [],
  isLoading: false,
  error: "",
};
