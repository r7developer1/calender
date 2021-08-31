import { configureStore } from "@reduxjs/toolkit";
import item_list_calender from "./features/calender.slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    item_list_calender
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({thunk: false}),
    sagaMiddleware
  ],
  devTools: process.env.NODE_ENV !== 'production'
});
sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch);
