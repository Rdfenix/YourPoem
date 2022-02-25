import { all } from "redux-saga/effects";
import getRandomPoems from "./getPoemsSaga";

export default function* rootSaga() {
  yield all([getRandomPoems]);
}
