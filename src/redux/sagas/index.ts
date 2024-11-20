import { all } from "redux-saga/effects";
import moviesWatcher from "@/redux/sagas/movieSaga/movieSaga";
import currentMovieWatcher from "./currentMovieSaga/currentMovieSaga";

export default function* rootSaga() {
  yield all([moviesWatcher(), currentMovieWatcher()]);
}
