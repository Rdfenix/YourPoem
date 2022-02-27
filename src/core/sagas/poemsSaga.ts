import { AxiosResponse } from "axios";
import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { Poem, StateReducer } from "../../shared/interface/poem";
import { sortAscending } from "../../shared/util/common";
import {
  fetchPoemsAction,
  getFavoritePoemsAction,
  updatePoemListAction,
} from "../action/poemAction";
import { GET_POEMS, SET_FAVORITE } from "../actionType";
import { getPoems } from "../service/api";

export const getPoemsFromStore = (state: StateReducer) => state.PoemReducer;
export const getFavoritesFromStore = (state: StateReducer) =>
  state.FavoritePoemReducer;

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

    newPoemList.sort((a, b) => sortAscending(a, b, "title"));

    yield put(fetchPoemsAction(newPoemList));
  } catch (error) {
    console.log(error);
  }
}

function* listOfFavorites(action: any) {
  try {
    let store: Poem[] = yield select(getPoemsFromStore);
    let favoriteList: Poem[] = yield select(getFavoritesFromStore);

    const itemIndex = store.findIndex(
      (item) =>
        item.title === action?.payload?.title &&
        item.author === action?.payload?.author
    );

    const favoriteIndex = favoriteList.findIndex(
      (item) =>
        item.title === action?.payload?.title &&
        item.author === action?.payload?.author
    );

    if (itemIndex > -1 && favoriteIndex <= -1) {
      favoriteList = [...favoriteList, store[itemIndex]];

      favoriteList.forEach((element) => {
        element.favorite = true;
      });

      store.splice(itemIndex, 1);

      yield put(updatePoemListAction(store));
      yield put(getFavoritePoemsAction(favoriteList));
      return;
    }

    if (itemIndex <= -1 && favoriteIndex > -1) {
      store = [...store, favoriteList[favoriteIndex]];

      store.forEach((element) => {
        element.favorite = false;
      });

      favoriteList.splice(favoriteIndex, 1);

      yield put(updatePoemListAction(store));
      yield put(getFavoritePoemsAction(favoriteList));
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

const randomPoems = all([
  takeLatest(GET_POEMS, fetchPoems),
  takeLatest(SET_FAVORITE, listOfFavorites),
]);

export default randomPoems;
