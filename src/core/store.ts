import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import rootReducer from "./reducer";
import rootSaga from "./sagas";

const create = () => {
  let win: any = window as any;

  const devTools =
    win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__();

  const sagaMidleware = createSagaMiddleware();
  const midleware = applyMiddleware(sagaMidleware, logger)(createStore)(
    rootReducer,
    devTools
  );

  sagaMidleware.run(rootSaga);

  return midleware;
};

const store = create();

export default store;
