import { configureStore } from "@reduxjs/toolkit";
import { initialLoginState, loginReducer } from "./reducers/loginReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";

export type InitialLogin = {
  login: typeof initialLoginState;
};

export type RootState = {
  auth: typeof initialLoginState;
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: [sagaMiddleware],
  reducer: {
    auth: loginReducer,
  },
});

sagaMiddleware.run(rootSaga);
