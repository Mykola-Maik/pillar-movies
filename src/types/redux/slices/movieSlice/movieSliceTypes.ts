import { Movie } from "@/types";

export interface MovieSliceState {
  totalMovies: number;
  totalPages: number;
  favorites: Movie[];
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
