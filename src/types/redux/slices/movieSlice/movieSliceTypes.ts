import { Movie } from "@/types";

export interface MovieSliceState {
  total: number;
  movies: Movie[];
  isLoading: boolean;
  error: string;
}

export interface ServerResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
