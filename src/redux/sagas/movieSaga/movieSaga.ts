import {
  getMoviesFailure,
  getMoviesRequest,
  getMoviesSuccess,
} from "@/redux/slices/movieSlice/movieSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import HttpService from "@/services/HttpService/HttpService";
import { AxiosError, type AxiosResponse } from "axios";
import type { ServerResponse } from "@/types";
import { Filters } from "@/enums";

function* getMoviesSaga({
  payload: { page, query = Filters.POPULAR },
}: PayloadAction<{ page: number; query?: Filters }>) {
  try {
    const response: AxiosResponse<ServerResponse> = yield call(
      HttpService.get,
      `/movie/${query}?page=${page}`
    );

    yield put(getMoviesSuccess(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getMoviesFailure(error.message));
    } else {
      console.error("An unknown error occurred.");
      yield put(getMoviesFailure("An unknown error occurred."));
    }
  }
}

function* moviesWatcher() {
  yield takeLatest(getMoviesRequest.type, getMoviesSaga);
}

export default moviesWatcher;
