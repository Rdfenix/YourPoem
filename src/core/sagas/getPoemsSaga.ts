import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Poem } from "../../shared/interface/poem";
import { fetchPoemsAction } from "../action/poemAction";
import { GET_POEMS } from "../actionType";
import { getPoems } from "../service/api";

function* fetchPoems() {
  try {
    const response: AxiosResponse<Poem[]> = yield call(getPoems);

    const newPoemList: Poem[] = response?.data?.map((poem) => {
      const newPoem: Poem = {
        author: poem?.author,
        title: poem?.title,
        lines: poem?.lines,
        linecount: poem?.linecount,
        favorite: false,
      };

      return newPoem;
    });

    yield put(fetchPoemsAction(newPoemList));
  } catch (error) {
    console.log(error);
  }
}

const getRandomPoems = all([takeLatest(GET_POEMS, fetchPoems)]);

export default getRandomPoems;
