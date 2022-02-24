import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

const create = () => {
  let test: any = {};

  const sagaMidleware = createSagaMiddleware();
  const midleware = applyMiddleware(sagaMidleware)(createStore)(test);

  sagaMidleware.run(test);

  return midleware;
};

const store = create();

export default store;
