import { Poem } from "../../shared/interface/poem";
import {
  FETCH_POEMS,
  GET_FAVORITE_POEMS,
  GET_POEMS,
  SET_FAVORITE,
  SHOW_LOADING,
  UPDATE_POEMS,
} from "../actionType";

export const getNewPoemsAction = () => ({ type: GET_POEMS });
export const fetchPoemsAction = (payload: Poem[]) => ({
  type: FETCH_POEMS,
  payload,
});
export const updatePoemListAction = (payload: Poem[]) => ({
  type: UPDATE_POEMS,
  payload,
});

export const setFavoriteToCardAction = (payload: {
  title: string;
  author: string;
}) => ({
  type: SET_FAVORITE,
  payload,
});
export const getFavoritePoemsAction = (payload: Poem[]) => ({
  type: GET_FAVORITE_POEMS,
  payload,
});

export const setShowLoading = (payload: boolean) => ({
  type: SHOW_LOADING,
  payload,
});
