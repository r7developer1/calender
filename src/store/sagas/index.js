import { all } from "redux-saga/effects";
import { initApp } from "./init.saga";
import itemSaga from "./item.saga";
import watchRental from "./rental.saga";
import watchLoading from "./overlay.saga";


export default function* rootSaga() {

  yield all([
    initApp(),
    itemSaga(),
    watchRental(),
    watchLoading()
  ])
}
