import { all } from "redux-saga/effects";
import moviesWatcher from "@/redux/sagas/movieSaga/movieSaga";

export default function* rootSaga() {
  yield all([moviesWatcher()]);
}
