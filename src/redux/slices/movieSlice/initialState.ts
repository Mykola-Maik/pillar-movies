import { MovieSliceState } from "@/types";

export const initialState: MovieSliceState = {
  total: 0,
  movies: [],
  isLoading: false,
  error: "",
};
