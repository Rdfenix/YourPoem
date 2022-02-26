import { all } from "redux-saga/effects";
import randomPoems from "./poemsSaga";

export default function* rootSaga() {
  yield all([randomPoems]);
}
