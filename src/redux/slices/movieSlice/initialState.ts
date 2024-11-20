import { MovieSliceState } from "@/types";

const getFavoritesFromLocalStorage = () => {
  const favorites =
    localStorage.getItem("favorites") ||
    localStorage.setItem("favorites", "[]");
  return favorites ? JSON.parse(favorites) : [];
};

export const initialState: MovieSliceState = {
  totalMovies: 0,
  totalPages: 1,
  movies: [],
  favorites: getFavoritesFromLocalStorage(),
  isLoading: false,
  error: "",
};
