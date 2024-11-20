import { call, put, takeLatest } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import HttpService from "@/services/HttpService/HttpService";
import { AxiosError, type AxiosResponse } from "axios";
import type { CurrentMovie } from "@/types";
import {
  getMovieDetailsFailure,
  getMovieDetailsRequest,
  getMovieDetailsSuccess,
} from "@/redux/slices/currentMovieSlice/currentMovieSlice";

function* getMovieDetailsSaga({ payload }: PayloadAction<number>) {
  try {
    const response: AxiosResponse<CurrentMovie> = yield call(
      HttpService.get,
      `/movie/${payload}`
    );

    yield put(getMovieDetailsSuccess(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getMovieDetailsFailure(error.message));
    } else {
      console.error("An unknown error occurred.");
      yield put(getMovieDetailsFailure("An unknown error occurred."));
    }
  }
}

function* currentMovieWatcher() {
  yield takeLatest(getMovieDetailsRequest.type, getMovieDetailsSaga);
}

export default currentMovieWatcher;
